import { createStore } from 'vuex'
import { ethers } from 'ethers'
import Meta from "../utils/Meta.json";
import axios from 'axios'

const transformCharacterData = (characterData) => {
  const tokenId = Number(characterData._hex)

  return {
    tokenId: tokenId
    
  };
};

export default createStore({
  state: {
    account: null,
    error: null,
    models: [],
    contract_address: '0xBeFeE3AF63B9EC2F2791f46B8C5d167a4daef698'
//      contract_address: '0xe931c0a9E9DebB3b31f1c48686921e499cCcBFde'
  },
  mutations: {
    setAccount (state, account) {
      state.account = account
    },
    setError (state, error) {
      state.error = error
    },
    setModels(state, models) {
      state.models = models;
    }
  },
  getters: {
    account: (state) => state.account,
    error: (state) => state.error,
    models: (state) => state.models
  },
  actions: {
    async connect ({ commit, dispatch }, connect) {
      try {
        const { ethereum } = window
        if (!ethereum) {
          commit('setError', 'Metamask not installed!')
          return
        }
        if (!(await dispatch('checkIfConnected')) && connect) {
          await dispatch('requestAccess')
        }
        await dispatch('checkNetwork')
      } catch (error) {
        console.log(error)
        commit('setError', 'Account request refused.')
      }
    },
    async checkNetwork ({ commit, dispatch }) {
      const chainId = await ethereum.request({ method: 'eth_chainId' })
      const rinkebyChainId = '0x4'
      if (chainId !== rinkebyChainId) {
        if (!(await dispatch('switchNetwork'))) {
          commit(
            'setError',
            'You are not connected to the Rinkeby Test Network!'
          )
        }
      }
    },
    async switchNetwork () {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }]
        })
        return 1
      } catch (switchError) {
        return 0
      }
    },
    async checkIfConnected ({ commit }) {
      const { ethereum } = window
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if (accounts.length !== 0) {
        commit('setAccount', accounts[0])
        return 1
      } else {
        return 0
      }
    },
    async requestAccess ({ commit }) {
      const { ethereum } = window
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      })
      commit('setAccount', accounts[0])
    },
    async getContract({ state }) {
      try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          state.contract_address,
          Meta.abi,
          signer
        );
        console.log(connectedContract);
        return connectedContract;
      } catch (error) {
        console.log(error);
        console.log("connected contract not found");
        return null;
      }
    },
    async getModels({ state, commit, dispatch }) {
      console.log('getModels in use')
      try {
        const connectedContract = await dispatch("getContract");
        const charactersTxn = await connectedContract.getModelsByOwner(state.account);
        console.log(charactersTxn)
        const models = charactersTxn.map((characterData) =>
           transformCharacterData(characterData)
        );
        console.log(models)

        let dataModel = []

        for (let i = 0; i < models.length; i++) {
          const baseURL = await connectedContract.baseURI();
          const dataURL = baseURL + models[i].tokenId + `.json`

          const response = await axios.get(dataURL);
          dataModel.push(response.data);
        }

        commit("setModels", dataModel);
      } catch (error) {
        console.log(error);
      }
    },
    async mintModel({ state, commit, dispatch }, obj) {
      console.log('Mint new model')
      try {
        console.log(obj)
        let arr = []
        arr.push({value: obj.name, description: "df", image: obj.img})
        const data = JSON.stringify(arr)
        console.log(arr[0].image)
      //  const connectedContract = await dispatch("getContract");
      //  await connectedContract.mint(1, 3000000000000000);

      } catch (erroe) {

      }
    }
  },
  modules: {
  }
})

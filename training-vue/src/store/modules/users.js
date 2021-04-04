import axios from "axios";

const state = () => ({
    usersList: []
})

const mutations = {
    USERS_LIST(state, data) {
        state.usersList = data
    }
}

const actions = {
    getUsersList({commit}) {
        return axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('USERS_LIST', response.data)
                console.log('res', response.data)
            })
            .catch(error => {
                throw(error)
            })

    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
  };
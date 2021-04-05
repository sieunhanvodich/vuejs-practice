import axios from "axios";

const state = () => ({
    usersList: [],
    user: {},
    userUpdate: {}
})

const mutations = {
    USERS_LIST(state, data) {
        state.usersList = data
    },
    USER(state, data) {
        state.user = data
    },
    REMOVE_USER(state, id) {
        state.usersList = state.usersList.filter(user => {
            user.id !== id
        })
    },
    UPDATE_USER(state, userUpdate) {
        state.userUpdate = userUpdate
    }
}

const actions = {
    async getUsersList({commit}) {
        await axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('USERS_LIST', response.data)
            })
            .catch(error => {
                throw(error)
            })

    },

    async getUserDetail({commit}, id) {
        await axios
            .get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                commit('USER', response.data)
                console.log('res', response.data)
            })
            .catch(error => {
                throw(error)
            })

    },

    async deleteUser({ commit }, id) {
        await axios
            .delete(`http://jsonplaceholder.typicode.com/users/${id}`);
            commit('REMOVE_USER', id)
           
    },

    async updateUser({commit}, id) {
        await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, id)
            .then(res => {
                commit('UPDATE_USER', res.data)
            })
            .catch(err => {
                throw err
            })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
  };
import axios from "axios";

const state = () => ({
    postsList: [],
    post: {}
})

const mutations = {
    POSTS_LIST(state, data) {
        state.postsList = data
    },
    POST(state, data) {
        state.post = data
    }
}

const actions = {
    getPostsList({commit}) {
        return axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('POSTS_LIST', response.data)
                console.log('res', response.data)
            })
            .catch(error => {
                throw(error)
            })

    },

    getPostDetail({commit}, id) {
        return axios
            .get('http://jsonplaceholder.typicode.com/posts?id=', id)
            .then(response => {
                commit('POSTS_LIST', response.data)
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
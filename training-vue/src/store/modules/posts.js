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
    async getPostsList({commit}) {
        return await axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('POSTS_LIST', response.data)
                console.log('res', response.data)
            })
            .catch(error => {
                throw(error)
            })

    },

    async getPostDetail({commit}, id) {
        return await axios
            .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                commit('POST', response.data)
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
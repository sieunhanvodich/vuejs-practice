import axios from "axios";

const state = () => ({
    postsList: [],
    post: {},
    postUpdate: {}
})

const mutations = {
    POSTS_LIST(state, data) {
        state.postsList = data
    },
    POST(state, data) {
        state.post = data
    },
    REMOVE_POST(state, id) {
        state.postsList = state.postsList.filter(post => {
            post.id !== id
        })
    },
    UPDATE_POST(state, postUpdate) {
        const index = state.postsList.findIndex(post => post.id === postUpdate.id);
        if (index !== -1) {
            state.postsList.splice(index, postUpdate);
        }
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

    },

    async deletePost({ commit }, id) {
        await axios
            .delete(`http://jsonplaceholder.typicode.com/posts/${id}`);
            commit('REMOVE_POST', id)
           
    },

    async updatePost({commit}, updatedPost) {
        await axios.put(`http://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost)
            .then(res => {
                commit('UPDATE_POST', res.data)
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
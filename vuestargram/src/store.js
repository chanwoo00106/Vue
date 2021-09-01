import { createStore } from 'vuex'

const store = createStore({
    state(){
    return {
        name: 'byun'
    }
    },
    mutations: {
        changeName(state) {
            state.name = 'chan'
        }
    }
})

export default store
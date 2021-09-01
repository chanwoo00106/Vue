import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            likes: 0,
            clicked: false
        }
    },
    mutations: {
        increase(state) {
            if (!state.clicked) state.likes++;
            else state.likes--;
            state.clicked = !state.clicked
        }
    }
})

export default store
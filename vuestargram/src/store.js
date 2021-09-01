import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state(){
        return {
            likes: 0,
            clicked: false,
            more: {},
        }
    },
    mutations: {
        increase(state) {
            if (!state.clicked) state.likes++;
            else state.likes--;
            state.clicked = !state.clicked
        },
        setMore(state, data){
            state.more = data
        }
    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more1.json`)
            .then(result => {
                context.commit('setMore', result.data)
            })
        }
    }
})

export default store
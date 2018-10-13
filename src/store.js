import {createStore} from 'redux';
import axios from 'axios';

const initialState = {
        posts : []
}


const rootReducer = function(state = initialState, action){
    switch(action.type) {
        case 'GET_POSTS':
            axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => state.posts = response.data)
        break;

        case 'LIKE_POST':
        state.posts.map(post => {
            if (post.id === action.postId) {
                return post.likes++
            }

            return post
        })
        break;

        default: console.log('default')
    }

    return state;
}

const store = createStore(rootReducer)

export default store 



// map = misma cantidad / modificar.  aplicar una funcion a todos los elementos que hay en un array. siempre me va a devolver la misma cantidad de items.
// es para modificar los posts. definis si ese tiene o no que ser modificado. 

// filter = menos, ninguno o igual /  buscar  / lee 
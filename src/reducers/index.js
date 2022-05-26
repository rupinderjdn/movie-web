import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES } from '../actions'

const InitialMoviesState = {
    list : [], 
    favourites : [],
    showFavourites : false,
}
export default function movies(state = InitialMoviesState, action){
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES : return {
            ...state,   
            list : action.movies,
 
        }

        case ADD_FAVOURITE :

        return {
            ...state,
            favourites  : [action.movie, ...state.favourites]
        }

        case REMOVE_FAVOURITE :
            const filterArr = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            ) 
        return{
            ...state,
            favourites : filterArr
        }
        case SET_SHOW_FAVOURITES :
            return {
                ...state,
                showFavourites : action.val
            }
        default : return state
    }
}

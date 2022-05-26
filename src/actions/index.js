// actions is just the way of telling the store is hey i wanna do something
// {
//     type:"ADD_MOVIES",
//     movies : [m1,m2,m3],
// };
// action types


export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
// action creators
export function addMovies(movies){
    return {
        movies : movies,
        type : "ADD_MOVIES",
        
    }
}
export function addFavourite(movie){
    return {
        movie : movie,
        type : "ADD_FAVOURITE",
    }
}
export function removeFavourite(movie){
    return {
        movie,
        type : "REMOVE_FAVOURITE"
    }
} 
export function setShowFavourite(val){
    return {
        val,
        type : "SET_SHOW_FAVOURITES"
    }
} 

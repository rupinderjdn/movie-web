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
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
// action creators
export function addMovies(movies){
    return {
        movies : movies,
        type : ADD_MOVIES,
        
    }
}
export function addFavourite(movie){
    return {
        movie : movie,
        type : ADD_FAVOURITE,
    }
}
export function removeFavourite(movie){
    return {
        movie,
        type : REMOVE_FAVOURITE
    }
} 
export function setShowFavourite(val){
    return {
        val,
        type : SET_SHOW_FAVOURITES
    }
}
export function handleMovieAdd(searchText){
    const url = `https://www.omdbapi.com/?t=${searchText}&apikey=d12a8546`;
    return function(dispatch){
        fetch(url)
         .then(response =>{
             // console.log(response)
             return response.json();
         })
         .then(results => {
             if(results.Response === 'True'){
                 console.log("movie adding : ",results)
                 dispatch(addMovieToList(results))
             }
         })
 
         
    }
 }
export function addMovieToList(movie){
    return {
        type : ADD_MOVIE_TO_LIST,
        movie
    };
}
export function handleMovieSearch(searchText){
   const url = `https://www.omdbapi.com/?s=${searchText}&apikey=d12a8546`;
   return function(dispatch){
       fetch(url)
        .then(response =>{
            // console.log(response)
            return response.json();
        })
        .then(results => {
            if(results.Response === 'True'){
                console.log(results.Search)
                dispatch(addMovieSearchResult(results.Search))
            }
        })

        
   }
}
export function addMovieSearchResult (results){
    return {type : ADD_SEARCH_RESULT, results}
}

import MovieCard from './MovieCard';
import React from 'react';
import Navbar from './Navbar.js';
import { data } from '../util/data';
import { addMovies,setShowFavourite } from '../actions';

class App extends React.Component {
  componentDidMount() {
    // make an API call
    // dispatch an action

    const { store } = this.props;
    store.dispatch(addMovies(data));
    store.subscribe(() => {
      // console.log("UPDATED")
      // will be called after dispatch function
      this.forceUpdate();
      console.log(store.getState());
      // this function should not be used in general
    })

    // ideally we should avoid hardcoding dispatch function
  }
  isMovieFavourite(movie) {
    const { favourites } = this.props.store.getState();

    return favourites.indexOf(movie) >= 0;
  }
  changeTab(val){
    this.props.store.dispatch(setShowFavourite(val))
  }
  render() {
    // return 'a';
    // componentDidMount()
    const { list, favourites, showFavourites } = this.props.store.getState(); // {list,favourites}
    const movies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="container row">
            <div className="col-md-6 text-center fs-4 "><button className="btn btn-primary" onClick={() => this.changeTab(false)}>Movies</button></div>
            <div className="col-md-6 text-center fs-4 "><button className="btn btn-primary" onClick={() => this.changeTab(true)}>Favourites</button></div>
        </div>
        <ul className="list-group">
          <li className="list-group-item">{
            movies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)} />
            ))}</li>
        </ul>
      </div>
      </div >
    );
  }
}

export default App;

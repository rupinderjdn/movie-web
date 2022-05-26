import React from "react";
import {addFavourite,removeFavourite} from '../actions';

class MovieCard extends React.Component {
    handleFavouriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
      
    }
    handleUnFavouriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render(){
        const {movie, isFavourite} = this.props
        // console.log(movie)
        return (
            <div className="card">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="img-fluid w-100" src={movie.Poster}/>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h3 className="card-title">{movie.Title} ({movie.Released.split(" ")[2]})</h3>
                            <small className="text-muted">{movie.Genre}</small>
                            <p className="card-text">{movie.Plot}</p>
                            <h5 className="card-title">Actors</h5>
                            <p className="card-text">{movie.Actors}</p>
                            <h5 className="card-title">Writers</h5>
                            <p className="card-text">{movie.Writer}</p>
                            <h5 className="card-title">Director</h5>
                            <p className="card-text">{movie.Director}</p>
                            <div className="footer">
                                <div className="rating">IMDB : {movie.imdbRating}</div>
                                {
                                    isFavourite
                                    ? <button className="btn btn-danger fw-bolder" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                                    : <button className="btn btn-warning fw-bolder" onClick={this.handleFavouriteClick}>Favourite</button>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}
  
  export default MovieCard;
  
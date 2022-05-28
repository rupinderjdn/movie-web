import React from "react";
import {handleMovieAdd, handleMovieSearch} from '../actions'; 

class Navbar extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            showSearchResults : false,
            searchText: ''
        }
    }
    handleAddToMovies = (movie)=>{
        this.props.store.dispatch(handleMovieAdd(movie));
        
        this.setState({
            showSearchresults : false,
        })
    
    }
    handleSearch = (e) =>{
        e.preventDefault()
        const {searchText} = this.state;
        // console.log(this.props.store)
        this.props.store.dispatch(handleMovieSearch(searchText));
    }
    handleChange = (e) => {
        this.setState({
            searchText : e.target.value
        })
    }
    render(){
        // const {search} = this.props.search()
        // const { showSearchResults } = this.state;
        const {result, showSearchResults} = this.props.search;
        // console.log("hey this are results",result);
        // if(result.length>1)console.log("first result : ",result[0])
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Movie App</a>
                <div className="col-6">
                    <form className="d-flex flex-row justify-content-start">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
                        <button className="btn btn-success" type="submit" onClick = {this.handleSearch}>Search</button>
                    </form>
                    {showSearchResults && 
                        <div className="search-results bg-light rounded-bottom list-group col-5 bg-secondary p-0">
                            {result.map((res, index) => (
                                <li className="list-group-item bg-secondary p-1 row d-flex flex-row " key={index}>
                                    <div className="col-3 ">
                                        <img className="col-12 search-image" src={res.Poster} alt="search-pic"/>
                                    </div>
                                    <div className="movie-info col-9">
                                        <span ><h4>{res.Title} ({res.Year})</h4></span>
                                        <button  className="btn btn-info" onClick={()=>this.handleAddToMovies(res.Title)}>Add To Movies</button>
                                    </div>
                                </li>
                            ))}
                        
                            
                        </div>
                    }
                    {/* {
                        result.map(res=>{
                            console.log(res.Title)
                        })
                    } */}
                </div>
            </nav>
        )
    }  
}
  
  export default Navbar;
  
import React from "react";


class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Movie App</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </nav>
        )
    }  
}
  
  export default Navbar;
  
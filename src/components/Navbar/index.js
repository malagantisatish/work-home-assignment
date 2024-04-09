import {Component} from "react"
import {Link} from "react-router-dom"
import "./index.css"

class Navabr extends Component{
    state={searchValue:""}

    getTheSearchValue=event=>{
        this.setState({searchValue:event.target.value})
    }
    render(){
        const {searchValue} = this.state
        return (
            <nav className="navbar">
                <h1>MOVIE DB</h1>
                <ul className="categories-list">
                    <li className="category-item">
                        <Link to="/" className="link">Popular</Link>
                    </li>
                    <li className="category-item">
                        <Link to="/top-rated-movies" className="link">Top Rated</Link>
                    </li>
                    <li className="category-item">
                        <Link to="/upcoming-movies" className="link">Upcoming</Link>
                    </li>
                    <li className="category-item">
                        <input type="search" value={searchValue} className="search-element" placeholder="Search Movie" onChange={this.getTheSearchValue}/>
                        <button type="button" className="search-btn">Search</button>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Navabr
import {Component} from "react"
import Navbar from "../Navbar"
import MovieItem from "../MovieItem"
import {Oval} from "react-loader-spinner"
import { BsArrowLeftSquare,BsArrowRightSquare } from "react-icons/bs";
import "./index.css"

const apiStatus = {
    initial:"INITIAL",
    inProcess:"PROCESS",
    success:"SUCCESS",
    failure:"FAILED"
}

class PopularMovies extends Component{
    state={moviesArray:[],error:false,errorMsg:"",pageNo:1,status:apiStatus.initial}

    componentDidMount(){
        this.getTheData()
    }

    getTheData=async()=>{
        const {pageNo} = this.state
        this.setState({status:apiStatus.inProcess})
        const key="d69c7e5016c1d973fd6a3615ce35e5ae"
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${pageNo}`)
        if (response.ok){
            const data = await response.json()
            console.log(data.results)
            this.setState({moviesArray:data.results,status:apiStatus.success})
        }
        else{
            this.setState({error:true,errorMsg:response.error_msg,status:apiStatus.failure})
        }
    }

    renderTheMoviesList=()=>{
        const {moviesArray} = this.state
        return <ul className="movies-list">
            {moviesArray.map(each=>(
                <MovieItem key={each.id} movieDetails={each}/>
            ))}
        </ul>
    }

    renderTheLoader=()=>(
        <div className="loader">
            <Oval size={10} color="white"/>
        </div>
    )

    decreseThePageCount=()=>{
        const {pageNo} = this.state 
        if (pageNo>1){
            this.setState(prevState=>({pageNo:prevState.pageNo-1}),this.getTheData)
        }
    }

    increaseThePageCount = ()=>{
        this.setState(prevState=>({pageNo:prevState.pageNo+1}),this.getTheData)
    }

    renderThePagination=()=>{
        const {pageNo} = this.state 
        return (
            <div className="pagination">
                <button onClick={this.decreseThePageCount} type="button"><BsArrowLeftSquare size={25} color="white"/></button>
                <p>{pageNo}</p>
                <button onClick={this.increaseThePageCount} type="button"><BsArrowRightSquare size={25} color="white"/></button>
            </div>
        )
    }

    renderTheViews=()=>{
        const {status} = this.state 
        switch(status){
            case apiStatus.inProcess:
                return this.renderTheLoader()
                break
            case apiStatus.success:
                return this.renderTheMoviesList()
                break    
            case apiStatus.failure:
                return this.renderFailureView()
                break     
            default:
                return null    
        }
    }


    render(){
     return(
        <>
            <Navbar/>
            <div className="popular-movies-page">
                {this.renderTheViews()}
                {this.renderThePagination()}
            </div>
        </>
        )
    }
}

export default PopularMovies
import {Component} from "react"
import { Oval } from "react-loader-spinner"
import Navabr from "../Navbar"
import "./index.css"

const apiStatus = {
    initial:"INITIAL",
    inProcess:"PROCESS",
    success:"SUCCESS",
    failure:"FAILED"
}

class MovieDetails extends Component{
    componentDidMount(){
    }
    render(){
        const {id} = this.props 
      
        console.log(id)
        return (
            <>
            <Navabr/>
            </>
        )
    }
}


export default MovieDetails

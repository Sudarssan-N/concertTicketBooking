import React from "react"
import Movie from './movies.js'
import {movies} from './movie.js'
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComp from "./NavbarComp" 
import SeatLayout from "./SeatLayout";
import './Home.css';
import SignUp from "./SignUp.js"
import Slider from "./Slider.js"
import Signin from "./Signin.js"

function Home(){
    return(
        <div className="home">
            <NavbarComp/>
            <Slider/>
            <div className="grid-container">
                {
                    movies.map((m)=>{
                        return <Movie data={m}/>
                    })
                }
            </div> 
            {/* <SeatLayout /> */}
            {/* <Signin/> */}
      </div>
    );
}
export default Home;
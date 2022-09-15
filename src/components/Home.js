import React from "react"
import Movie from './movies.js'
import {movies} from './movie.js'
import "bootstrap/dist/css/bootstrap.min.css"
import './Home.css';
import Slider from "./Slider.js"
import {FormControl,Select,MenuItem,InputLabel} from '@mui/material';




function Home(){
    return(
        <div className="home">
            
            <Slider/>
            <div className="fb">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Filter by Month">
                    <MenuItem value={10}>January</MenuItem>
                    <MenuItem value={20}>February</MenuItem>
                    <MenuItem value={30}>March</MenuItem>
                    <MenuItem value={40}>April</MenuItem>
                    <MenuItem value={50}>May</MenuItem>
                    <MenuItem value={60}>June</MenuItem>
                    <MenuItem value={70}>July</MenuItem>
                    <MenuItem value={80}>August</MenuItem>
                    <MenuItem value={90}>September</MenuItem>
                    <MenuItem value={100}>October</MenuItem>
                    <MenuItem value={110}>November</MenuItem>
                    <MenuItem value={120}>December</MenuItem>
                </Select>
                </FormControl>
            <br/><br/>
            </div>
            <div className="grid-container">
                {
                    movies.map((m)=>{
                        return <Movie data={m}/>
                    })
                }
            </div> 
            {/* <Caption/>
            {/* <Profile/> */}
      </div>
    );
}
export default Home;
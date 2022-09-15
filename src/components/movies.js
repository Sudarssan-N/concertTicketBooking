import React from 'react'
import './movies.css'
import MoviePage from './MoviePage';

const Movie = ( { data } ) =>{             
    const clickHandler = () =>{
      <MoviePage/>
      alert("helo world ");
    }
    const{img,title,direc,Duration}=data;
    return (
    <div className='movie' onMouseOver={()=>{
      console.log(title);
    }}>
         <img className="j1" src={img} alt='err' height={100} width={75}/>
         <h1 className='title'>{title}</h1>
         <h2>{direc}</h2>
         <h3>{Duration}</h3>
         <button type='button' className='button1' onClick={clickHandler}>Book</button> 
    </div> 
  )
};

export default Movie
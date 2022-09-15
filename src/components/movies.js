import React from 'react'
import './movies.css'
<<<<<<< HEAD
import './movie.js'
import { NavLink } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
=======
import MoviePage from './MoviePage';

>>>>>>> a51d688259e79ddb57781acf85be52c64f798030
const Movie = ( { data } ) =>{             
    const clickHandler = () =>{
      <MoviePage/>
      alert("helo world ");
    }
    const{img,title,direc,Duration}=data;
    const navigate = useNavigate();
    return (
    <div className='movie' onMouseOver={()=>{
      console.log(title);
    }}>
<<<<<<< HEAD
        <NavLink to="/infopage">
          <div className='poster' onClick={()=>navigate('/infopage')}>
            <div className='content'>
                halo
            </div>
            <img className="j1" src={img} alt='err'/>
          </div>
        </NavLink>
         {/* <h1 className='title'>{title}</h1>
=======
         <img className="j1" src={img} alt='err' height={100} width={75}/>
         <h1 className='title'>{title}</h1>
>>>>>>> a51d688259e79ddb57781acf85be52c64f798030
         <h2>{direc}</h2>
         <h3>{Duration}</h3>
         <button type='button' className='button1' onClick={clickHandler}>Book</button> 
    </div> 
  )
};

export default Movie
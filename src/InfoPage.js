import React, { useEffect, useState } from "react";
import axios from 'axios';

import "./InfoPage.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function InfoPage(){
    const [ data, setData ] = useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        axios.post('http://192.168.29.254:4000/concertInfo', 
            {
            }
        ).then((res)=>{
            console.log('fetched')
            setData(res);
        }).catch((err)=>{
            console.log(err)
        })
    })

    return(
        <div className="img-fluid">
            <div className="detail">
            <img src="../images/mock.jpg" className="bigImage" alt="mposter"/>
            </div>
            <div className="details">
                <h4>Event : {data.name}</h4>
                <h3>City : {data.city}</h3>
                <h3>Date : {data.date}</h3>
                <h4>{data.likes}</h4>
            </div>
            <Button onClick={()=>navigate('/payment')}></Button>
        </div>
    );
}
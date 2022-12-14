import React from "react";
import "./Slider.css"
function Slider(){

    function counter(){
        var counter=1;
        setInterval(function(){
            document.getElementById('radio'+counter).checked=true;
            counter++;
            if(counter>2){
                counter=1;
            }
        },3000);
    }

    return(
    <div className="sliderbody">
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radios" id="radio1"/>
                <input type="radio" name="radios" id="radio2"/>
                <div className="slide first">
                    <img src="../images/land2.jpg"/>
                </div>  
                <div className="image">
                    <img src="../images/landscape.jpg"/>
                </div>
                <div className="auto">
                    <div className="auto1"></div>
                    <div className="auto2"></div>
                </div>
            </div>
            <div className="manual">
                <label className="manuals" for="radio1"></label>
                <label className="manuals" for="radio2"></label>
            </div>
        </div>
        {counter()}
    </div>
    );
}
export default Slider
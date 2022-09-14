import { useState } from "react";
import Seat from "./Seat";

 

const seats=[
    {row:[{status:true},{status:true},{status:false},{status:true}]},
    {row:[{status:true},{status:true},{status:true},{status:true}]},
    {row:[{status:true},{status:true},{status:true},{status:true}]},
]


function SeatLayout(){
    const [toggle,setToggle] = useState(true);

    return (    
        <div>
            <button onClick={()=>setToggle(!toggle)}>Susa</button>
            {toggle && 'asasa'}
            {seats.map((row)=>{
                return row.row.map((s)=>{
                    return <Seat seat={s}/>
                })
            })
            }
        </div>
    );
}

export default SeatLayout;
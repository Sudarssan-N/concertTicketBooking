import { useMemo } from "react";

function Seat({seat}){

    const style=useMemo(()=>{
        console.log('sasa');
        return { 
            height: 50,
            width: 50,
            backgroundColor: seat.status ? 'green' : 'grey',
            margin: 20,
        }
    }
    , [seat.status] )
    
    return (
        <div style={style}>

        </div>
    );
}

export default Seat;
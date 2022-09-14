import { io } from 'socket.io-client';

const Socket = io('http://localhost:4000');

Socket.on('connect' , ()=>{
    console.log("Socket Id: " + Socket.id);
})

export default Socket;
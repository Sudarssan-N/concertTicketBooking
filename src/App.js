import './App.css';
import Home from './components/Home';

import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom'
import NavbarComp from './components/NavbarComp';

import Socket from './socket';
import Signin from './components/Signin';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import InfoPage from './InfoPage';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      
      <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path='/signin' element={<Signin/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/infopage" element={<InfoPage/>} />
      </Routes>
    </div>
  );
}

export default App;

//192.168.29.254:

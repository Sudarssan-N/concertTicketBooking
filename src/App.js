import './App.css';
import Home from './components/Home';

import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom'
import NavbarComp from './components/NavbarComp';

import Socket from './socket';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      
      <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

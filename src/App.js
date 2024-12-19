import React from 'react';
import './App.css'; 
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Module/Dashboard';
import ForgetPassord from './Components/ForgetPassword';
import Signup from './Components/Signup';
import Tv from './Components/Module/Tv';
import Headphones from './Components/Module/Headphones';
import Speakers from './Components/Module/Speakers';
import Tvdetails from './Components/Module/Details/Tvdetails'
import Headdetails from './Components/Module/Details/Headdetails'
import Speakerdetails from './Components/Module/Details/Speakerdetails'
function App() {
  
  return (
    <div>
      <Router>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/forgetpassword" element={<ForgetPassord/>}/>
  <Route path="/tv" element={<Tv/>} />
  <Route path="/headphone" element={<Headphones/>}/>
  <Route path="/speakers" element={<Speakers/>}/>
  <Route path="/:brand" element={<Tv />} />
  <Route path="/tvdetails/:id" element={<Tvdetails/>}/>
  <Route path="/:head" element={<Headphones />} />
  <Route path="/headdetails/:id" element={<Headdetails/>}/>
  <Route path="/:speak" element={<Headphones />} />
  <Route path="/speakdetails/:id" element={<Speakerdetails/>}/>

</Routes>

      </Router>
    </div>
  );
}

export default App;
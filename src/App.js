import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage.jsx';
import Login from './Components/Login/Login.jsx';
import {  
  Routes ,
  Router,  
  Route,  
  Link  
}   
from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Routes>
    
        <Route exact='true' path='/login' element={< Login />}></Route>
        
      </Routes>
      
     
    </div>
  );
}

export default App;

import logo from './sinarmaslogo.jpg';
import logoprofile from './profile.png';
import logofacebook from './facebook.png';
import logotwitter from './twitter.jpg';
import logoinstagram from './instagram.png';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">
       <div className="header">
          <div className="kata-2"> 
            <img src={logo} className="logo" alt="Logo " />
            <div>
               SimasWork
               </div> 
          </div>         

          <div className="kata-2"> 
              <div className="username">Username</div>
                <img src={logoprofile} className="logoprofile" alt="Logoprofile " />
              </div>   
               
          </div>  

      <content>
        <Router><Sidebar/>utube sampe 47:46 ya kc </Router>
        
      </content>


      <footer className="footer">
        <div className="pisah">
        <div className="copyright">Copyright 2021, All Rights Reserved</div>

        <div className="pisah1">
        <div className="logofacebook"><img src={logofacebook} className="logofacebook" alt="Logofacebook " /></div>
        <div className="logotwitter"><img src={logotwitter} className="logotwitter" alt="Logotwitter " /></div>
        <div className="logoinstagram"><img src={logoinstagram} className="logoinstagram" alt="Logoinstagram " /></div>
        </div>
        
        </div>
      
      </footer>

    </div>
  );
}

export default App;

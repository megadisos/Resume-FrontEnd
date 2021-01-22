import logo from './logo.svg';
import './App.css';
import Title from './components/title'
import Menu from './components/menu'

import Grid from '@material-ui/core/Grid';
import React, {useState,useEffect} from 'react'
function App() {
  const [about,setAbout] = useState([])
 
  return (
    <div>
    <div  className="row">
      <div className="col-12">
        <Title />
        </div> 
      </div>
      <Menu about={about}/>
      
      </div>
  );
}

export default App;

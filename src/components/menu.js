import React,{useState, useEffect} from 'react'
import Image from './image'
import Details from './detail'
function Menu(props){
    const [about,setAbout] = useState([])
    useEffect(()=>{
      fetch(`https://45.33.100.225/api/About/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
    }
    })
    .then(resp => resp.json())
    .then(resp => setAbout(resp))
    .catch( error => console.log(error))
    },[])
    const [select, setSelect] = useState("")
    function ShowData(value){
     setSelect(value)
      fetch(`https://45.33.100.225/api/`+value+`/`,{
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
          }
      })
      .then(resp => resp.json())
      .then(resp => setAbout(resp))
      .catch( error => console.log(error))

    console.log(value)
   }
   function ShowPorfolio(value){
    setSelect(value)
    console.log(select)
   }
    return(
        <div>
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm ">
  <div >
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link"  style={ select == "About" ? {color:'#154399'}:{} } onClick={(e) =>{ShowData("About")}}>ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  style={ select == "Skills" ? {color:'#154399'}:{} } onClick={(e) =>{ShowData("Skills")}}>SKILLS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  style={ select == "Experience" ? {color:'#154399'}:{} } onClick={(e) =>{ShowData("Experience")}}>EXPERIENCE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link "  style={ select == "Education" ? {color:'#154399'}:{} } onClick={(e) =>{ShowData("Education")}}>EDUCATION</a>
      </li>
      <li className="nav-item">
        <a className="nav-link "  onClick={(e) =>{ShowPorfolio("Portfolio")}}>PORTFOLIO</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link "  style={ select == "Contact" ? {color:'#154399'}:{} } onClick={(e) =>{ShowData("Contact")}}>CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
</div>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
            <Image />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 navbar-light bg-light">
        <h3>{select}</h3>
            <div class="dropdown-divider"></div>
          <Details about={about} select={select}/>
        </div>
      </div>
        </div>
    )
}
export default  Menu
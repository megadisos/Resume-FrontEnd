import React,{useState, useEffect} from 'react'
import Image from './image'
import Details from './detail'
function Menu(props){
    const [about,setAbout] = useState([])
    useEffect(()=>{
      fetch(`https://www.nabtastore.com.co/api/About/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
    }
    })
    .then(resp => resp.json())
    .then(resp => setAbout(resp))
    .catch( error => console.log(error))
    },[])
    const [select, setSelect] = useState("")
    function ShowData(value){
     setSelect(value)
      fetch(`https://www.nabtastore.com.co//api/`+value+`/`,{
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
          }
      })
      .then(resp => resp.json())
      .then(resp => setAbout(resp))
      .catch( error => console.log(error))

    console.log(value)
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
      {/* <li className="nav-item">
        <a className="nav-link "  >PORTFOLIO</a>
      </li> */}
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
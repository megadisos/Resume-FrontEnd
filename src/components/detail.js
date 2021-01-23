import React, {useState} from 'react'
import nabta from '../images/nabta.JPG'
import ardi from '../images/ardi.JPG'
import zona from '../images/zona.JPG'
import mf from '../images/misterf.JPG'
import acue from '../images/acue.JPG'
function Details(props){
    if(props.select == "Portfolio"){
        return(
            <div>
                <a href="https://drive.google.com/file/d/11ih7SINWB6GHlXok0a8WOi6ODITy9FCj/view?usp=sharing"><button type="button" class="btn btn-primary button-cv">Download Printable Resume</button></a>
        <div className="details navbar-light bg-light">
              <p></p>
              <a href="https://www.ardi-services.com/"><h6 className="name" >Ardi Services</h6>
              <img src={ardi} width="200px" height="150px"></img></a>
              <p></p>
              <a href="https://www.nabtastore.com.co/"><h6 className="name mt-2" >Nabta Store</h6>
              <img src={nabta} width="200px" height="150px"></img></a>
              <p></p>
              <a href="https://www.nabtastore.com.co/"><h6 className="name mt-2" >Zona Sport</h6>
              <img src={zona} width="200px" height="150px"></img></a>
              <a href="https://www.acueductosaucio.site/"><h6 className="name mt-2" >Acueducto Saucio</h6>
              <img src={acue} width="200px" height="150px"></img></a>
              <a href="https://www.misterfsite.com/"><h6 className="name mt-2" >Mister F</h6>
              <img src={mf} width="200px" height="150px"></img></a>
              

             </div>
             </div>
             )
             
       

     }else{
   
    return(
        <div><a href="https://drive.google.com/file/d/11ih7SINWB6GHlXok0a8WOi6ODITy9FCj/view?usp=sharing"><button type="button" class="btn btn-primary button-cv">Download Printable Resume</button></a>
        <div className="details navbar-light bg-light">
           
         {props.about && props.about.map(item =>{
             if(props.select == "About"){
                return(
                    <div>
                    <p></p>
                     <p className="name">{item.name}</p>
                     <p className="role">{item.role}</p>
                     <p className="text">{item.description}</p>
                     
                     </div>
               
             )
             } else if(props.select == "Skills"){
                return(
                    <div>
                       <p></p>
                     <h6 className="text">- {item.name}</h6>
            
                     </div>
               
             )

             }else if(props.select == "Experience"){
                return(
                    <div>
                        <p></p>
                     <h6 className="name">{item.company}</h6>
                     <h6 className="role_exp">{item.role}</h6>
                     <h6 className="text_exp">{item.tasks}</h6>
                     <h6  className="period">{item.period}</h6>
                     </div>
               
             )
             }else if(props.select == "Education"){
                return(
                    <div>
                        <p></p>
                     <h6 className="name">{item.name}</h6>
                     <h6 className="role_exp">{item.degree}</h6>
                     <h6 className="period">{item.period}</h6>
                    
                     </div>
               
             )

             }else if(props.select == "Contact"){
                return(
                    <div>
                      <p></p>
                      <h6 className="contact" >Email: {item.email}</h6>
                     <h6 className="contact" >Location: {item.location}</h6>
                     <h6 className="contact">Phone: +{item.phone}</h6>
            
                    
                     </div>)
               

             }else {
                return(
                    <div>
                    <p></p>
                     <p className="name">{item.name}</p>
                     <p className="role">{item.role}</p>
                     <p className="text">{item.description}</p>
                     
                     </div>
               
             )
             }
          
             
         })}
                 
        </div>
        </div>
    )
        }
    
}
export default Details
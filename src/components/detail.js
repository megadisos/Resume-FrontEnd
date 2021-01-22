import React, {useState} from 'react'

function Details(props){
   
   
    return(
        <div><button type="button" class="btn btn-primary button-cv">Download Printable Resume</button>
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
export default Details
import React from 'react' 
import linkedin from './img/linkedin.jpg'
import github from './img/github.jpg'
const Link = () => {
  return (
    <> 
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      
    <div> 
        <h2 style={{color:"#808080"}}>Linkedin</h2>
        <a href='https://www.linkedin.com/in/durgeshwar-sahani-3ba22b1b9/' ><img className="img-logo" src={linkedin} alt=""   /></a>  
         
    </div>  
    <div>
    <h2 style={{color:"#808080"}}>Github</h2>
    <a href='https://github.com/dksahani2002' ><img className="img-logo" src={github} alt=""   /></a> 
    </div>
    </div> 
    </>
  )
}

export default Link
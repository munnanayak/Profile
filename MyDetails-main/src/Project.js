import React from "react";
import "./Project.css";
import Project1 from './img/crypto.jpg';
import Project3 from './img/studentdata.jpg';
import Project2 from './img/realestate.jpeg';
import Project4 from './img/weather.jpg';
function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are many more yet to come,
        </p>
        <p className="heading p__color">
           Keep checking.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             
 

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Student Local Database And Basic Information</h4>
                     <a href="https://dddweb.herokuapp.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Buy Sell or Rent House</h4>
                     <a href="https://realestatewithdd-q6uehd78n-dksahani2002.vercel.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div> 
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">WeatherApp</h4>
                     <a href="https://github.com/dksahani2002/WeatherApp" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             
              
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Explore The Crypto with CryptoDd</h4>
                     <a href="https://cryptodetailsd.netlify.app/" className="project__btn">API Down (No Details)</a>
                     </div>
                 </div>
             </div>
             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;

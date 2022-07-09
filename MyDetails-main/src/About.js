import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Durgeshwar Sahani is a 3rd Year Undergraduate student in the
                Department of <strong>Civil Engineering</strong> at the <strong>Indian Institute of
                Technology Kharagpur.</strong> He is currently working on his Bachelor's
                in Technology (4 Year) degree.
              </p>
              <p className="about__text p__color">
                He completed his Matriculation from Divine Public School
                Gorakhpur, Uttar Pradesh in March 2017 securing 1st rank in
                School and +2 in March 2019 securing 1st rank in the stream of
                Mathematics from the Woodland Academy Gorakhpur, Uttar Pradesh.
                He then appeared for one of the world's toughest exams, i.e.,
                <b>Joint Entrance Examination(JEE) - Main and Advanced </b>(stood
                amongst Top 0.61%) to qualify for one of the most prestigious
                Institutes in India, IIT Kharagpur.
              </p>
              <p className="about__text p__color">
                His interests and hobbies are to practice and develop skills,
                such as - Competitive Programming, Structural Designing, Web
                Development (Full Stack) etc. 
                <br/>
                Epilogue : I'm seeking for an
                internship that will allow me to gain experience as a software
                developer.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer"> 
                    <a href="https://drive.google.com/file/d/19LnfUZRngHnfrazsqk5RA67FpREIyHb9/view?usp=sharing">
                      Download Cv
                    </a>
                  </button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">
                    <a href="#Contact">
                      Hire Me
                    </a>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

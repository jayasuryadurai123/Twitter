import React from 'react';
import cover from '../Img/TwitterCover.png';
import logo from '../Svg/Twitter.svg';
import '../Style/firstpage.scss';
import {Link} from 'react-router-dom';

const FirstPage = () =>{
    return(
        <div className="container-first">
          <div className="details-container">
              <div className="img-container">
                 <img src={cover} alt="cover-img" />
              </div>
              <div className="right-container">
                  <div className="logo-container">
                     <img src={logo} />
                  </div>
                  <h1>Happening now</h1>
                  <h3>Join Twitter Today.</h3>
                  <Link to="/login" className="btn">Log In</Link>
                  <Link to="/signup" className="btn">Sign Up</Link>
              </div>
          </div>
        </div>
    )
}

export default FirstPage;
import React from "react";
import './styles.css'
import logo from '../../midia/Netflix_logo.svg.png';
import avatar from '../../midia/Netflix-avatar.png'
let header = ({black, profileSelected}) => {
  return (
<header className={black? 'black' : ''}>
   <div className="header--logo">
    <a href="/">
      <img src={logo}/>
    </a>
   </div>
   <div className="header--user">
    {
      !profileSelected ? <img src={avatar} alt ="User"/> : ''   
    }

   </div>
</header>
  );
};
export default header;

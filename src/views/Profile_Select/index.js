import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "../../components/Loged-header";
import UserSection from "../../components/user-section"
import icon from "../../midia/Netflix_umbrella_Icon.png";
import { Link } from "react-router-dom";

export default function Profile_Select() {
  const [iconList, setIconList] = useState([icon,icon,icon,icon,icon]);
  return (
    <div className="page">
      <Header profileSelected={true} />
      <div className="profile--body">
        <h1 className="profile--title">Quem está assistindo?</h1>
        <div className="profile--list">
          
        <UserSection iconList={iconList} />

        </div>
      </div>
    </div>
  );
}

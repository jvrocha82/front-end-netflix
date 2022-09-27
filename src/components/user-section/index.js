import React, {useState} from "react";
import './styles.css';
import { Link } from "react-router-dom";

let List = ({iconList}) => { 
  
  return (
    <>
    {
        iconList.map((item, key) => (
            
        <Link key={key} className="profile--area" to="/logado">
        <div
          className="profile--profile--icon"
          style={{
            backgroundImage: `url(${item})`,
          }}
        />

        <div className="profile--name">João</div>
      </Link>
        ))
    }
     </>
  );
};
export default List;

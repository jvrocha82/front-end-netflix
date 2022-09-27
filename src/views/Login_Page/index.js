import React, { useEffect, useState } from "react";
import "./styles.css";
import HeaderHomePage from "../../components/Home-Header";

export default function Profile_Select() {
  return (
    <div className="login">
      <div
        style={{
          width: "99vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/56ea3d27-5c65-4401-bd14-15b0b210662a/BR-pt-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
        }}
      >
        <div className="login--page">
          <HeaderHomePage profileSelected={true} />
          <div className="login--body">
            <div className="login--container">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

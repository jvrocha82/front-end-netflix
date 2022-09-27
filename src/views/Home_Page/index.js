import React, { useEffect, useState } from "react";
import "./styles.css";
import HeaderHomePage from "../../components/Home-Header";

export default function Profile_Select() {
  return (
    <div className="home">
      <div
        style={{
          width: "99vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/56ea3d27-5c65-4401-bd14-15b0b210662a/BR-pt-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
        }}
      >
        <div className="home--page">
          <HeaderHomePage path={'login'}profileSelected={true} />
          <div className="home--message">
            <div className="home--container">
              <span className="home--title">
                Filmes, séries e muito mais. Sem limites.
              </span>
              <h1 className="home--sub-title"> 
                Assista aonde quiser. Cancele quando quiser.
              </h1>
              <h2 className="home--second-sub-title">
               Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
              </h2>
              <div className="home--button-area">
                <input type="text" placeholder={'Email'}className="home--email-input"/>
                <button type="submit" className="home--email-button">{'Vamos lá >'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

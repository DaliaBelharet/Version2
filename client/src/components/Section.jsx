import React from 'react';
import tizi from "../assets/tizi.jpg";

const Section = () => {
  return (
    <section className="section">
      <div className="mybackground">
        <img src={tizi} alt="background" className="background-img" />
        <div className="title">
          <h1 className="main-title">Découvrez l'essence de l'immobilier à Tizi Ouzou</h1>
        </div>
      </div>

      <style>
        {`
         .section {}
       
          .mybackground {
            position: relative;
            width: 100%;
            overflow: hidden; /* Assure que l'image ne dépasse pas la section */
          }

          .background-img {
            width: 120%; 
            filter: blur(5px); /* Pour flouter l'image */
          }

          .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white; 
          }

          .main-title {
            font-size: 3em; 
            font-weight: bold; 
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
          }
        `}
      </style>
    </section>
  );
}

export default Section;

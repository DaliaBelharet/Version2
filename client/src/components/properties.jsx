import React from 'react';
import { Link } from 'react-router-dom';
import home1 from "../assets/lpp.jpg" 
import home2 from "../assets/tigzirt.jpg"
import home3 from "../assets/villa.jpeg"

const Properties = () => {
  return (
    <div className="properties">
      <h2 className="properties-title">Nos Annonces Disponibles</h2>
      <div className="property-list">
        <Link to="" className="property-link">
          <img src={home1} alt="home1" className="property-image" />
          <h3 className="property-title">Logement promotionnel public LPP</h3>
        </Link>
        <Link to="" className="property-link">
          <img src={home2} alt="home2" className="property-image" />
          <h3 className="property-title">Villa à Tigzirt</h3>
        </Link>
        <Link to="" className="property-link">
          <img src={home3} alt="home3" className="property-image" />
          <h3 className="property-title">Villa à Azazga</h3>
        </Link>
      </div>

      <style>
        {`
          .properties {
            padding: 50px 0;
            text-align: center;
          }


          .properties-title {
            font-size: 2.5em;  */
            font-weight: bold; /* Police en gras */
            color: #333; /* Couleur du texte */
            margin-bottom: 30px; /* Espacement en bas du titre */
          }

          .property-title {
            font-weight: bold; /* Texte en gras */
            font-size: 1.2em; /* Taille de la police */
            margin-top: 10px; /* Espacement en haut du titre */
          }

          .property-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }

          .property-link {
            text-decoration: none;
            color: inherit;
          }

          .property-image {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
          }

          .property-image:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Properties;

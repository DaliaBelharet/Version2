import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from "../assets/DARKOUM.png";
import Logout from '../pages/auth/logout';

const Navbar = () => {
    const handleLogout = async () => {
        try {
            await Logout(); // Appel de la fonction logout depuis le composant Logout
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
            // Gérer les erreurs si nécessaire
        }
    };
    
    return (
        <nav style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px', // Nouvelle hauteur
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px', // Réduction du padding
            zIndex: 1000,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        }}>
            <img src={logo} alt="Logo" style={{ marginRight: 20 ,width:100,marginTop:0}} />
            <ul style={{ 
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <li style={{ marginRight:20, // Réduction de la marge
                    fontWeight: 'bold',
                }}>
                    <Link to="/">Accueil</Link>
                </li>
                <li style={{  marginRight:20, // Réduction de la marge
                    fontWeight: 'bold',
                    marginLeft: 20
                }}>
                    <div id="nos-services">
                    <a href="#nos-services">Nos services</a>
                    </div>
                </li>
                <li style={{ 
                    fontWeight: 'bold',
                    marginLeft: 20
                }}>
                    <a href="#">A propos</a>
                </li>
            </ul>
                      
            <button 
                className="logout-btn" 
                style={{ 
                    backgroundColor: '#F27438',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 5,
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
                onClick={handleLogout} // Déclenchement de la déconnexion
            >
                Se déconnecter
            </button>
        </nav>
    );
}

export default Navbar;

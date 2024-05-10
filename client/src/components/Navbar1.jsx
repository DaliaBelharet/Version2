import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from "../assets/DARKOUM1.png";
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
            backgroundColor: 'white',
            color: 'black',
            padding: '15px 15px',
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
                <li style={{ marginRight:30,
                    fontWeight: 'bold',
                }}>
                    <Link to="/">Accueil</Link>
                </li>
                <li style={{  marginRight:30,
                    fontWeight: 'bold',
                    marginLeft: 30
                }}>
                    <div id="nos-services">
                    <a href="#nos-services">Nos services</a>
                    </div>
                </li>
                <li style={{ 
                    fontWeight: 'bold',
                    marginLeft: 30
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

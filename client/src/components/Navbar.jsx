import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../assets/DARKOUM.png"

const Navbar = () => {
    return (
        <nav style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px', 
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px', 
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

            
            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                <button className="login-btn" style={{ 
                    backgroundColor: '#F27438',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 5,
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>Se connecter</button>
            </Link>
        </nav>
    );
}

export default Navbar;

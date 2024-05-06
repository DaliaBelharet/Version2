import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'white',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'black',
  };

  const linkStyle = {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle} className="footer" id="footer">
      <div style={footerContentStyle} className="footer-content">
        <p><a style={linkStyle} href="#about">À PROPOS</a></p>
        <p><a style={linkStyle} href="#nos-agences">NOS AGENCES IMMOBILIÈRES</a></p>
        <p>
          <a style={linkStyle} href="#contact">CONTACTEZ-NOUS</a>
          <br />
          Adresse: Tizi Ouzou, Algeria <br />
          Téléphone: +123456789 <br />
          Email: Tizihome@gmail.com
        </p>
        <p><a style={linkStyle} href="#legal">LÉGAL</a></p>
      </div>
    </footer>
  );
}

export default Footer;

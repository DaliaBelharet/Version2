import React, { useState } from 'react';
import about from "../assets/Programming-cuate.png";

const AboutUs = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <h1 style={styles.title}>À Propos de Nous</h1>
            <div style={styles.aboutContainer}>
                <div 
                    style={{...styles.imageContainer, transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={about} alt="À propos de nous" style={styles.image} />
                </div>
                <div style={styles.textContainer}>
                    <p 
                        style={{
                            ...styles.description,
                            fontSize: isHovered ? '18px' : '16px', // Augmente la taille de la police lors du survol
                            color: '#000', // Couleur de texte très noire
                        }}
                    >
                        En tant qu'étudiantes en ingénierie informatique, notre objectif est de fournir des solutions technologiques de qualité, en particulier dans le domaine de l'immobilier. Nous sommes passionnées par l'utilisation de la technologie pour créer des expériences immersives, telles que des visites virtuelles de biens immobiliers. Notre engagement est d'offrir une satisfaction optimale en rendant la recherche de biens plus facile et plus enrichissante pour les utilisateurs.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    title: {
        textAlign: 'center',
        fontWeight: 'bold', 
        fontSize: '36px',
        fontFamily: 'Arial, sans-serif',
        color: '#F27438',
        margin: '20px 0',
    },
    aboutContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        maxWidth: '800px',
    },
    imageContainer: {
        flex: '0 0 auto',
        marginRight: '40px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },
    image: {
        width: '300px',
        height: 'auto',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    textContainer: {
        flex: '1',
    },
    description: {
        fontSize: '16px',
        lineHeight: '1.5',
        transition: 'font-size 0.3s ease', 
    },
};

export default AboutUs;

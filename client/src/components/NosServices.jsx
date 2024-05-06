import React from 'react';
import VR from "../assets/Virtual reality-amico.png"
import sold from "../assets/Realtor-cuate.png"
import agent from "../assets/Build your home-pana.png"

const NosServices = () => {
    return (
        <div>
            <h1 style={styles.title}>Nos Services</h1>
            <div style={styles.servicesContainer}>
                <div style={styles.service}>
                    <img src={sold} alt="Service 1" style={styles.image} />
                    <h2 style={styles.serviceTitle}>Vente et location immobilière</h2>
                   
                </div>
                <div style={styles.service}>
                    <img src={VR} alt="Service 2" style={styles.image} />
                <h2 style={styles.serviceTitle}>Visites virtuelles des biens immobilier</h2>
                    
                </div>
                <div style={styles.service}>
                    <img src={agent} alt="Service 3" style={styles.image} />
                    <h2 style={styles.serviceTitle}>Accompagnement par un agent immobilier</h2>
                    
                </div>
            </div>
        </div>
    );
}



const styles = {
    title: {
        textAlign: 'center',
        fontWeight: 'bold', 
        fontSize: '32px', 
    },
    servicesContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    service: {
        textAlign: 'center', 
        width: '25%', 
    },
    image: {
        width: '80%', 
    },
    serviceTitle: {
        fontWeight: 'bold',
        fontSize: '20px', 
    },
};

export default NosServices;

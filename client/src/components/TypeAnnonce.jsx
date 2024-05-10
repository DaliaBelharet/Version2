import React, { useState } from 'react';

const TypeAnnonce = () => {
    const [selectedType, setSelectedType] = useState(''); // État pour suivre le type d'annonce sélectionné

    const handleTypeSelect = (event) => {
        setSelectedType(event.target.value); // Mettre à jour le type d'annonce sélectionné
    };

    return (
        <div>
            
            <select name="ad-type" id="ad-type" value={selectedType} onChange={handleTypeSelect}>
                <option value="">Type d'annonce</option>
                <option value="location">Location</option>
                <option value="vente">Vente</option>
            </select>
        </div>
    );
};

export default TypeAnnonce;

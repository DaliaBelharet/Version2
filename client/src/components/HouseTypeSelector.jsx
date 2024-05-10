import React, { useState } from 'react';

const HouseTypeSelector = () => {
    const [selectedOption, setSelectedOption] = useState(''); 

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value); 
    };

    return (
        <div>
            <label htmlFor="house-type"></label>
            <select name="house-type" id="house-type" value={selectedOption} onChange={handleOptionSelect}>
                <option value="">Type de bien</option>
                <option value="villa">Villa</option>
                <option value="appartement">Appartement</option>
                <option value="studio">Studio</option>
              
            </select>
        </div>
    );
};

export default HouseTypeSelector;

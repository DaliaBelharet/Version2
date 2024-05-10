import React, { useState } from 'react';

const PriceSelector = () => {
    const [minPrice, setMinPrice] = useState(''); // État pour suivre la valeur de Prix min
    const [maxPrice, setMaxPrice] = useState(''); // État pour suivre la valeur de Prix max

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value); // Mettre à jour la valeur de Prix min
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value); // Mettre à jour la valeur de Prix max
    };

    return (
        <div>
            <label htmlFor="min-price">Prix min:</label>
            <input type="number" id="min-price" name="min-price" value={minPrice} onChange={handleMinPriceChange} />
            <label htmlFor="max-price">Prix max:</label>
            <input type="number" id="max-price" name="max-price" value={maxPrice} onChange={handleMaxPriceChange} />
        </div>
    );
};

export default PriceSelector;

import React, { useState } from 'react';
import wilayasData from './wilayas.json';

const WilayaSelector = () => {
    const [selectedWilaya, setSelectedWilaya] = useState(''); 
    const handleWilayaSelect = (event) => {
        setSelectedWilaya(event.target.value); 
    };

    return (
        <div>
            
            <select name="wilaya" id="wilaya" value={selectedWilaya} onChange={handleWilayaSelect}>
                <option value=""> Wilaya</option>
                {wilayasData.map(wilaya => (
                    <option key={wilaya.code} value={wilaya.name}>{wilaya.name}</option>
                ))}
            </select>
        </div>
    );
};

export default WilayaSelector;

import React, { useState } from 'react';
import SanayiBolgeleri from './SanayiBolgeleri';
const textStyle = {
    fontSize: '50px',color: 'darkgreen'};

    function SanayiBolgeleriListesi() {
        const [selectedBolge, setSelectedBolge] = useState(null);
        const handleBolgeChange = (bolgeId) => {
            setSelectedBolge(bolgeId);
          }; return (
            <div>
             
              <ul style={textStyle}>
                {SanayiBolgeleri.map(bolge => (
                  <li key={bolge.id}>
                    <label > 
                      <input
                        type="radio"
                        name="bolge"
                        value={bolge.id}
                        checked={selectedBolge === bolge.id}
                        onChange={() => handleBolgeChange(bolge.id)}
                      />
                      {bolge.name} - {bolge.location}
                    </label>
                  </li>
                ))}
              </ul>
              {selectedBolge && (
                <p style={{textAlign:"center", fontSize: '50px',color:"black" }}>Seçili bölgede bulunan fabrika sayısı: {SanayiBolgeleri[selectedBolge - 1].factoryCount}</p>
              )}
             
            </div>
          );
        }
        
        export default SanayiBolgeleriListesi;
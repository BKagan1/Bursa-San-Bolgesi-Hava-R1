import React, { useState } from 'react';
import SanayiBolgeleri from './SanayiBolgeleri';
import './modal.css';

function YerlesimMesafe() {
  const [selectedBolge, setSelectedBolge] = useState(null);
  const textStyle = {   fontSize: '35px',color: 'darkblue'};
  const handleBolgeClick = (bolgeId) => {
    setSelectedBolge(bolgeId);
  };

  const bolgeleriSirala = (bolgeA, bolgeB) => {
    const siralamaDegeri = {
      "Yakın": 1,
      "Orta": 2,
      "Uzak": 3
    };
    
    return siralamaDegeri[bolgeA.yakinlik] - siralamaDegeri[bolgeB.yakinlik];
  };

  return (
    <div>
      <h1 >Sanayi Bölgelerinin yerleşime uzaklığı ve Yüz Ölçümleri</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {SanayiBolgeleri.sort(bolgeleriSirala).map(bolge => (
          <div key={bolge.id} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleBolgeClick(bolge.id)}>
            <p style={textStyle}><strong>{bolge.name}</strong></p>
            <p style={textStyle}>Yüz ölçümü: {bolge.area} km²</p>
            <p style={textStyle}>Yerleşime Yakınlık: {bolge.yakinlik}</p>
          </div>
        ))}
      </div>
      {selectedBolge && (
        <p style={textStyle}> Seçili bölgede bulunan fabrika sayısı: {SanayiBolgeleri[selectedBolge - 1].factoryCount}</p>
      )}
           {selectedBolge && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedBolge(null)}>&times;</span>
            <p>Yerleşime yakın ve fabrika sayısı çok. Hava filtreleme işlemi yapılmalıdır uyarısı!</p>
          </div>
        </div>
      )}
 
    
    </div>
  );
}



export default YerlesimMesafe;
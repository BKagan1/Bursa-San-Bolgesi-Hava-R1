import './App.css'
import React from 'react';
import SanayiBolgeleriListesi from './SanayiBolgeleriListesi';
import YerlesimMesafe from './YerlesimMesafe';

function App() {
  return (
    <div>
      
      <h1 className="text">Bursa Sanayi Bölgeleri</h1>
      <SanayiBolgeleriListesi />
      <YerlesimMesafe/>
    </div>
  );
    
 
  
}

export default App


import React, { useRef } from 'react';
import './Reino.module.css';
import { Navbar } from '../navbar/navbar';
import Teku from '../../assets/musicas/ruins.mp3';
//import Dados from '../../dados/Personagens.json';
import Card from './CardR'; 
import Direitos from '../direitos/Direitos';

const Reino = () => {
  const audioRef = useRef(null);

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <>
      <Navbar />
      <audio className="background-music" ref={audioRef} autoPlay loop>
        <source src={Teku} type="audio/mp3" />
      </audio>

      <div className="volume-control">
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.1"
          defaultValue="1"
          onChange={handleVolumeChange}
        />
      </div>

      <Card/>
      <Direitos/>
    </>
  );
};

export default Reino;
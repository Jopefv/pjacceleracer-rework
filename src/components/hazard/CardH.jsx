import React, { useEffect, useState } from 'react';
import styles from './Hazard.module.css';
import Swamp from '../../assets/simbols/swamp.png'
import Canyon from '../../assets/simbols/canyon.png'
import Chrome from '../../assets/simbols/chrome.png'
import Fog from '../../assets/simbols/fog.png'
import Storm from '../../assets/simbols/storm.png'
import Ice from '../../assets/simbols/ice.png'
import Wind from '../../assets/simbols/wind.png'
import Junk from '../../assets/simbols/junk.png'
import Cavern from '../../assets/simbols/cavern.png'
import Solar from '../../assets/simbols/solar.png'
import Cliff from '../../assets/simbols/cliff.png'
import Lab from '../../assets/simbols/lab.png'
import Metro from '../../assets/simbols/metro.png'
import Neon from '../../assets/simbols/neon.png'
import Reactor from '../../assets/simbols/reactor.png'
import Ruins from '../../assets/simbols/ruins.png'
import Lava from '../../assets/simbols/lava.png'
import Cosmic from '../../assets/simbols/cosmic.png'
import Blizz from '../../assets/simbols/blizz.png'
import Cyber from '../../assets/simbols/cyber.png'
import Monum from '../../assets/simbols/monum.png'
import Desert from '../../assets/simbols/deserto.png'
import Warp from '../../assets/simbols/warp.png'
import Micro from '../../assets/simbols/micro.png'
import Water from '../../assets/simbols/water.png'
import Fan from '../../assets/simbols/fan.png'

const Card = () => {
  const [cards, setPersonagens] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Jopefv/api-acce/main/hazard.json')
      .then((response) => response.json())
      .then((data) => setPersonagens(data.cards))
      .catch((error) =>
        console.error('Erro ao buscar os dados da API:', error),
      );
  }, []);

  const getSymbolPath = (Tag) => {
    switch (Tag) {
      case 'Swamp':
        return Swamp;
      case 'Canyon':
        return Canyon;
      case 'Chrome':
        return Chrome;
      case 'Fog':
        return Fog;
      case 'Storm':
        return Storm;
      case 'Ice':
        return Ice;
      case 'Wind':
        return Wind;
      case 'Junk':
        return Junk;
      case 'Cavern':
        return Cavern;
      case 'Solar':
        return Solar;
      case 'Cliff':
        return Cliff;
      case 'Lab':
        return Lab;
      case 'Metro':
        return Metro;
      case 'Neon':
        return Neon;
      case 'Reactor':
        return Reactor;
      case 'Ruins':
        return Ruins;
      case 'Lava':
        return Lava;
      case 'Cosmic':
        return Cosmic;
      case 'Blizz':
        return Blizz;
      case 'Cyber':
        return Cyber;
      case 'Monum':
        return Monum;
      case 'Desert':
        return Desert;
      case 'Warp':
        return Warp;
      case 'Micro':
        return Micro;
      case 'Water':
        return Water;
      case "FanBase" :
        return Fan 
      default:
        return '';
    }
  };

  

  const filteredCards = cards.filter((filme) => filme.Type === 'Hazard');

  return (
    <div className={styles.divCard}>
      {filteredCards.map((filme) => (
        <section className={styles.card} key={filme.id}>
          <div className="team-logo-container">
            <img
              className="logo2"
              src={getSymbolPath(filme.Tag)}
              alt={`${filme.Tag} Logo`}
              width="50"
              height="40"
            />
          </div>
          <div
            className={styles.linha}
            style={{ backgroundColor: filme.cor }}
          ></div>
          <h2>{filme.Name}</h2>
          <ul>
            <li>
              <img
                className={styles.imgcard}
                src={filme.url}
                alt={filme.name}
              />

              <p className={styles.textao}>Sinopse: {filme.Description}</p>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Card;

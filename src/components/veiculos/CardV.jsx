import React, { useEffect, useState } from 'react';
import styles from './Carros.module.css';
import TekuLogo from '../../assets/Logos/tekulogo.jpg';
import MetalLogo from '../../assets/Logos/metallogo.png';
import SilencerzLogo from '../../assets/Logos/silencerzlogo.png';
import DronesLogo from '../../assets/Logos/droneslogo.jpeg';
import Speed from '../../assets/icons/speed.png';
import Power from '../../assets/icons/power.png';
import Perfo from '../../assets/icons/perfo.png';

const Card = () => {
  const [cards, setPersonagens] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Jopefv/api-acce/main/cards.json')
      .then((response) => response.json())
      .then((data) => setPersonagens(data.cards))
      .catch((error) =>
        console.error('Erro ao buscar os dados da API:', error),
      );
  }, []);

  const getLogoPath = (Team) => {
    switch (Team) {
      case 'Teku':
        return TekuLogo;
      case 'Metal Maniac':
        return MetalLogo;
      case 'Silencerz':
        return SilencerzLogo;
      case 'Racing Drones':
        return DronesLogo;
      default:
        return '';
    }
  };

  const filteredCards = cards.filter((filme) => filme.Type === 'Vehicle');


  return (
    <div className={styles.divCard}>
      {filteredCards.map((filme) => (
        <section className={styles.card} key={filme.id}>
          <div className="team-logo-container">
            <img
              className="logo2"
              src={getLogoPath(filme.Team)}
              alt={`${filme.Team} Logo`}
              width="30"
              height="30"
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

              <p>Equipe: {filme.Team}</p>
              <div className='stactist'>
                <div>
                  <img src={Speed} width="20" height="20" alt="Speed" /> ={' '}
                  {filme.Speed}
                </div>
                <div>
                  <img src={Power} width="20" height="20" alt="Power" /> ={' '}
                  {filme.Power}
                </div>
                <div>
                  <img src={Perfo} width="20" height="20" alt="Performance" /> ={' '}
                  {filme.Performance}
                </div>
              </div>

              <p className={styles.textao}>Sinopse: {filme.Description}</p>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Card;

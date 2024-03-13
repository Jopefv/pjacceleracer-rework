import React, { useEffect, useState } from 'react';
import styles from './Mods.module.css';
import TekuLogo from '../../assets/Logos/tekulogo.jpg'
import MetalLogo from '../../assets/Logos/metallogo.png'
import SilencerzLogo from '../../assets/Logos/silencerzlogo.png'
import DronesLogo from '../../assets/Logos/droneslogo.jpeg'

const Card = () => {
  const [cards, setPersonagens] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Jopefv/api-acce/main/mods.json')
      .then((response) => response.json())
      .then((data) => setPersonagens(data.cards))
      .catch((error) =>
        console.error('Erro ao buscar os dados da API:', error),
      );
  }, []);

  const getLogoPath = (Tyres) => {
    switch (Tyres) {
      case 'Teku':
        return TekuLogo;
      case 'Metal Maniacs':
        return MetalLogo;
      case 'Silencerz':
        return SilencerzLogo;
      case 'Racing Drones':
        return DronesLogo;    
      default:
        return '';
    }
  };

  

  const filteredCards = cards.filter((filme) => filme.Type === 'MOD');

  return (
    <div className={styles.divCard}>
      {filteredCards.map((filme) => (
        <section className={styles.card} key={filme.id}>
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

              <p className={styles.textao}>Sinopse: {filme.Effects}</p>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Card;

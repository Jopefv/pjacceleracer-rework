import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import TekuLogo from '../../assets/Logos/tekulogo.jpg'
import MetalLogo from '../../assets/Logos/metallogo.png'
import SilencerzLogo from '../../assets/Logos/silencerzlogo.png'
import DronesLogo from '../../assets/Logos/droneslogo.jpeg'

const Card = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Jopefv/NewAcceleracersApiDataBase/main/Personagens.json',
    )
      .then((response) => response.json())
      .then((data) => setPersonagens(data.personagens))
      .catch((error) =>
        console.error('Erro ao buscar os dados da API:', error),
      );
  }, []);

  const getLogoPath = (equipe) => {
    switch (equipe) {
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

  return (
    <div className={styles.divCard}>
      {personagens.map((filme) => (
        <section className={styles.card} key={filme.id}>
          <div className="team-logo-container">
            <img
              className="logo2"
              src={getLogoPath(filme.equipe)}
              alt={`${filme.equipe} Logo`}
              width="30"
              height="30"
            />
          </div>
          <div
            className={styles.linha}
            style={{ backgroundColor: filme.cor }}
          ></div>
          <h2>{filme.nome}</h2>
          <ul>
            <li>
              <img
                className={styles.imgcard}
                src={filme.image}
                alt={filme.nome}
              />
              
              <p>Equipe: {filme.equipe}</p>
              <p className={styles.textao}>Sinopse: {filme.sinopse}</p>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Card;

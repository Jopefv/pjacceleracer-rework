import React, { useRef, useEffect } from 'react';
import { Navbar } from '../navbar/navbar';
import Music from '../../assets/musicas/acceleracershome.mp3';
import Nolo from '../../assets/backp/nolo.png'
import Taro from '../../assets/backp/taro.png'
import Kurt from '../../assets/backp/kurt.png'
import Vert from '../../assets/backp/vert.png'
import './home.css'
import Direitos from '../direitos/Direitos';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementos = document.querySelectorAll('.backgroundnolo, .backgroundspeed, .backgroundbreak, .backgroundfinal');

      elementos.forEach((elemento) => {
        if (scrollPosition > 100) {
          elemento.classList.add('background-transition');
        } else {
          elemento.classList.remove('background-transition');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Adicione dependências conforme necessário


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
        <source src={Music} type="audio/mp3" />
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

      <div className='backgroundnolo'>
        <div className='info'>
          <h2 className='persona'>Hot Wheels Ignition</h2>
          <p className='sobre'>
          Depois de descobrir que o Anel do Poder abriria novas dimensões de corrida, o Dr. Peter Tezla resolve sair em busca do artefato. Entretanto, ele acaba sendo atacado e impedido pelos mortais androides Racing Drones, que em seguida transformam a Hot Wheels City em seu novo Quartel General. Tezla, ainda que em estado grave, consegue escapar do local. Algum tempo depois, os pilotos das gangues de corrida de rua Teku e Metal Maniacs são recrutados pela equipe de Tezla para participar dos Reinos de Corrida, com o objetivo de conseguir os poderosos AcceleChargers e impedir os Drones de conseguir acesso ao mundo dos Accelerons, o que poderia ameaçar a raça humana. Após disputarem o Reino da Tempestade, os condutores tentam desistir, mas chamam ajuda e resolvem continuar a batalha contra os mortais robôs de Gelorum, mesmo depois de Kadeem ter ficado para trás. Subsequentemente, é aberto o Reino do Pântano, onde a equipe Teku consegue o primeiro AcceleCharger para o lado de Tezla e se prepara para novos desafios
          </p>
        </div>
        <img src={Nolo} className='img14' alt='Imagem' />
      </div>

      <div className='backgroundspeed'>
        <img src={Taro} className='img15' alt='Imagem' />
        <div className='info'>
          <h2 className='persona'>Hot Wheels Speed Of Silence</h2>
          <p className='sobre'>
          As equipes Teku e Metal Maniacs se enfrentam em uma perseguição de tirar o fôlego pelo Accele-Charger em duas novas corridas mundiais, a Corrida na Água e a Corrida no Metrô. Com pistas de alta velocidade, derrapagens emocionantes e desafios mortais ao longo de todo o percurso, desviar de alguns tubarões comedores de carros é moleza para os pilotos! Mas quando os Racing Drones aparecem na estrada, os riscos aumentam ainda mais! Enquanto isso, Dr. Telza e sua equipe trabalham para desvendar o segredo do poder do Accele-Charger, esperando ganhar alguma vantagem contra os temidos drones e suas incríveis habilidades para pilotar. Compartilhe destas aventuras a bordo dos carros mais quentes do pedaço, as músicas mais maneiras do momento e os pilotos mais audazes das estradas nesta disputada corrida para salvar o mundo!
          </p>
        </div>
      </div>

      <div className='backgroundbreak'>
        <div className='info'>
          <h2 className='persona'>Hot Wheels Breaking Point</h2>
          <p className='sobre'>
          Enquanto os pilotos da Teku tentam descobrir o paradeiro de Vert, desaparecido desde o fim do Reino Aquático, a nova equipe Silencerz se prepara para um novo reino e aprimora suas tecnologias. Os Racing Drones, por sua vez, começam a transformar o piloto capturado Kadeem em um de seus servos robôs, ao mesmo tempo que Tork e Wylde disputam em uma corrida a nova liderança do grupo Metal Maniacs. Em seguida, o Reino do Canal se abre, tendo novamente a vitória dos Silencerz. Posteriormente, depois de quatro reinos, Vert retorna para o Acceledrome, sendo autorizado a disputar o Reino da Sucata pelo Dr. Tezla. Dentro do reino, Wylde, novo líder dos Metal Maniacs, trava uma batalha com seu irmão Kurt, mas acaba sendo brutalmente jogado para fora da pista após passá-lo. Ferido, é então capturado pelos Racing Drones, enquanto que Kurt vence a corrida e consegue mais um AcceleCharger. Mais tarde, Gelorum apresenta a Wylde a versão androide de Kadeem, agora um Racing Drone.
          </p>
        </div>
        <img src={Kurt} className='img14' alt='Imagem' />
      </div>

      <div className='backgroundfinal'>
        <img src={Vert} className='img15' alt='Imagem' />
        <div className='info'>
          <h2 className='persona'>Hot Wheels Ultimate Race</h2>
          <p className='sobre'>
          Disposto a invadir o Quartel General dos Racing Drones para salvar seu irmão Wylde, Kurt convence os pilotos das equipes rivais Teku e Metal Maniacs a se unirem. Alegando ainda estar com dores na perna, Vert entretanto decide ficar no Acceledrome. Em seguida, o Reino Cósmico se inicia, assim como o plano de Kurt, organizado sem que o Dr. Tezla, Gig e Lani saibam. Enquanto, os Racing Drones se preparam para ocupar o Acceledrome, graças a essas informações de Wylde, sob tortura. Posteriormente, os Silencerz vencem o Reino Cósmico e conquistam o último AcceleCharger, ao mesmo tempo em que os pilotos das duas equipes tomarão posse de um Sweeper e adentram ao Quartel General dos Drones. Após Lani encontrar um SilenceCharger AcceleCharger Gig a explica que Dr. mas que o cientista roubou a tecnologia da equipe, a reconfiguração, e iniciou seu próprio projeto. Depois, Gelorum e Acceledrome Racing Drones atacando, roubando todos os AcceleChargers pelos pilotos. Em posse sobrenaturais cartões de energia, Gerum assim evoca a 'Corrida Final', o último teste para chegar ao mundo dos Accelerons, oferecendo este modo de todos estes celebrados. No entanto, Veremos
          </p>
        </div>
      </div>

      
      <Direitos/>
    </>
  );
};

export default Home;

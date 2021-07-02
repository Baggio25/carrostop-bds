import { ReactComponent as MainImage } from '../../assets/images/carro-amarelo.svg';
import './styles.css';
import ButtonPrimary from './../../components/ButtonPrimary/index';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card-top">
        <div className="home-content-container-card-top">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container-card-top">
          <MainImage />
        </div>
      </div>
      <div className="home-card-bottom">
        <div className="home-container-button-card-bottom">
          <Link to="/cars">
            <ButtonPrimary />
          </Link>
        </div>
        <div className="home-container-content-card-bottom">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

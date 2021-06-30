import { ReactComponent as MainImage } from '../../assets/images/carro-amarelo.svg';
import Navbar from '../../components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card-top">
          <div className="home-content-container-card-top">
            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
          <div className="home-image-container-card-top">
            <MainImage />
          </div>
        </div>
        <div className="home-card-bottom">
          <div className="home-container-card-bottom">
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

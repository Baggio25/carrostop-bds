import { ReactComponent as CarImage } from '../../assets/images/carro-vermelho.svg';
import './styles.css';

const CarCard = () => {
  return (
    <>
      <div className="base-card"> 
        <div className="card-top-container">
          <CarImage />
        </div>
        <div className="card-bottom-container">
          <h6>Audi Supra TT</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
          <button className="btn btn-buy">COMPRAR</button>
        </div>
      </div>
    </>
  );
};

export default CarCard;
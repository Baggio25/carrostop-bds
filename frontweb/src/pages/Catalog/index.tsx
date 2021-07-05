
import CarCard from '../../components/CarCard';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="container my-4">  
        <div className="search-container">
          <input placeholder="Digite sua busca"/>
          <button className="btn btn-search">BUSCAR</button>
        </div>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </>
  );
};

export default Catalog;
import CarCard from '../../components/CarCard';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="container my-4">
        <div className="search-container">
          <input placeholder="Digite sua busca" />
          <button className="btn btn-search">BUSCAR</button>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;

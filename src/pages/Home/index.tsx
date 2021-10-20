import { ReactComponent as MainImage } from "assets/images/car-header1.svg";
import "./styles.css";
import Navbar from "components/Navbar";
import Button from "components/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">

        <div className="home-card">
          <div className="home-container-image">
            <MainImage />
          </div>
          <div className="home-container-text">
            <h2>O carro perfeito para você</h2>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="home-card-button">
          <div className="home-container-button">
            <NavLink to="/cars">
              <Button />
            </NavLink>
          </div>
          <div className="home-container-text-search">
            <p>Começe agora a navegar</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;

import { ReactComponent as MainImage } from "assets/images/car-header1.svg";
import "./styles.css";
import Navbar from "components/Navbar";
import Button from "components/Button";

const Home = () => {
  return (
    <>
      <Navbar />
          <div className="home-container">
            <div className="home-card">
              <div className="home-container-image">
                <MainImage />
              </div>
              <div className="home-container-text">
                <h2>O Carro perfeito para você</h2>
                <p>
                  Conheça nossos carros e dê mais um passo na realização do seu
                  sonho
                </p>
              </div>
            </div>

            <div className="home-card-button">
              <div className="home-container-button">
                <Button />
              </div>
              <div className="home-container-text-search">
                <p>
                  Começe agora a navegar
                </p>
              </div>
            </div>
          </div>

         
    </>
  );
};

export default Home;

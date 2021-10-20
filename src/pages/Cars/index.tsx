import Navbar from "components/Navbar";
import Product from "components/Product";
import "./styles.css";

const Car = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="basic-card">
              <form className="form-group ">
                <div className="search">
                  <input
                    type="text"
                    className="form-control input-custom"
                    placeholder="Digite sua busca"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <input
                    className="btn btn-primary btn-custom"
                    type="submit"
                    value="Buscar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
          <div className="col">
            <div className="basic-card">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;

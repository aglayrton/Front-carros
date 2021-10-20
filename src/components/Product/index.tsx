import "./styles.css";
import { ReactComponent as ProductImg } from "assets/images/car-card1.svg";

const Product = () => {
  return (
    <>
      <div className="product-price-container">
        <ProductImg className="img" />
        <h3>Audi Supra TT</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button type="submit" className="btn btn-primary">Comprar</button>
      </div>
    </>
  );
};

export default Product;

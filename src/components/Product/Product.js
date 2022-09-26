import styles from "./Product.module.css";
import { FaHeart } from "react-icons/fa";

function Product({ product, price, image, slug }) {
  return (
    <>
      <div class={styles.product}>
        <a href={slug}>
          <FaHeart className={styles.svg} />
          <img src={image} alt={product} />
          <p>{product}</p>
          <p className={styles.preco}>R{price}</p>
        </a>
      </div>
    </>
  );
}

export default Product;

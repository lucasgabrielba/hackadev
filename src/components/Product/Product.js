import styles from "./Product.module.css";
import { FaHeart } from "react-icons/fa";

function Product({ produto, preco, foto }) {
  return (
    <>
      <div class={styles.product}>
        <a href="/">
          <FaHeart className={styles.svg} />
          <img src={foto} alt={produto} />
          <p>{produto}</p>
          <p className={styles.preco}>{preco}</p>
        </a>
      </div>
    </>
  );
}

export default Product;

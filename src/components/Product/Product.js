import styles from "./Product.module.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function Product({ product, price, image, slug }) {
  const [active, setActive] = useState(styles.notFav);
  const handleClick = () => {
    active === styles.notFav ? setActive(styles.fav) : setActive(styles.notFav);
  };

  return (
    <>
      <div class={styles.product}>
        <FaHeart onClick={handleClick} className={active} to="/" />
        <a href={slug}>
          <img src={image} alt={product} />
          <p>{product}</p>
          <p className={styles.preco}>R{price}</p>
        </a>
      </div>
    </>
  );
}

export default Product;

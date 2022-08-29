import Product from "../Product/Product";
import styles from "./Shop.module.css";
import img1 from "./img/product1.jpg";
import img2 from "./img/product2.jpg";
import img3 from "./img/product3.jpg";
import img4 from "./img/product4.jpg";
import img5 from "./img/product5.jpg";
import img6 from "./img/product6.jpg";
import img7 from "./img/product7.jpg";
import img8 from "./img/product8.jpg";
import img9 from "./img/product9.jpg";
import img10 from "./img/product10.jpg";
import img11 from "./img/product11.jpg";
import img12 from "./img/product12.jpg";
import img13 from "./img/product13.jpg";
import img14 from "./img/product14.jpg";
import img15 from "./img/product15.jpg";
import img16 from "./img/product16.jpg";

function Shop() {
  return (
    <div>
      <div className={styles.shop}>
        <Product produto="Produto 1" preco="R$40,00" foto={img1} />
        <Product produto="Produto 2" preco="R$40,00" foto={img2} />
        <Product produto="Produto 3" preco="R$40,00" foto={img3} />
        <Product produto="Produto 4" preco="R$40,00" foto={img4} />
        <Product produto="Produto 5" preco="R$40,00" foto={img5} />
        <Product produto="Produto 6" preco="R$40,00" foto={img6} />
        <Product produto="Produto 7" preco="R$40,00" foto={img7} />
        <Product produto="Produto 8" preco="R$40,00" foto={img8} />
        <Product produto="Produto 9" preco="R$40,00" foto={img9} />
        <Product produto="Produto 10" preco="R$40,00" foto={img10} />
        <Product produto="Produto 11" preco="R$40,00" foto={img11} />
        <Product produto="Produto 12" preco="R$40,00" foto={img12} />
        <Product produto="Produto 13" preco="R$40,00" foto={img13} />
        <Product produto="Produto 14" preco="R$40,00" foto={img14} />
        <Product produto="Produto 15" preco="R$40,00" foto={img15} />
        <Product produto="Produto 16" preco="R$40,00" foto={img16} />
      </div>
      <div class={styles.load_more}>
        <button>
          <a href="/">LOAD MORE</a>
        </button>
      </div>
    </div>
  );
}

export default Shop;

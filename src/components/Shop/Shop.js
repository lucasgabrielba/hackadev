import Product from "../Product/Product";
import styles from "./Shop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-simple-ecommerce-api.herokuapp.com/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.shop}>
        {products.length > 0 &&
          products.map((product) => (
            <Product
              product={product.product}
              price={product.price}
              image={product.image}
              slug={product.slug}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;

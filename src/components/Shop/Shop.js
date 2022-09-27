import Product from "../Product/Product";
import styles from "./Shop.module.css";
import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
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

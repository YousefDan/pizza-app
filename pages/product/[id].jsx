import Image from "next/image";
import { useState } from "react";
import { pizza } from "../../db";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt="pizza page"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3>Choose the size</h3>
        <div className={styles.sizes}>
          <div onClick={() => setSize(0)} className={styles.size}>
            <Image alt="" src="/images/size.png" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div onClick={() => setSize(1)} className={styles.size}>
            <Image alt="" src="/images/size.png" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div onClick={() => setSize(2)} className={styles.size}>
            <Image alt="" src="/images/size.png" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="chesse"
              name="chesse"
              className={styles.checkbox}
            />
            <label htmlFor="chesse">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} min={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

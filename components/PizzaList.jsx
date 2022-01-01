import PizzaItem from "./PizzaItem";
import styles from "../styles/PizzaList.module.css";

const PizzaList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        beatae excepturi dolor repellat dolorem fuga quas, itaque distinctio ut
        deleniti modi, recusandae, eos nobis quae qui dolores iure ab
        asperiores.
      </p>
      <div className={styles.wrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <PizzaItem key={item} />
        ))}
      </div>
    </section>
  );
};

export default PizzaList;

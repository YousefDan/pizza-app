import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" alt="" width={500} height={500} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND YOUR RESTAURANTS</h1>
          {[1, 2, 3].map((item) => (
            <p key={item} className={styles.text}>
              1654 R. Don Road #304.
              <br /> NewYork, 85022
              <br /> (602) 867-1010
            </p>
          ))}
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          {[1, 2].map((item) => (
            <p key={item} className={styles.text}>
              1654 R. Don Road #304.
              <br /> NewYork, 85022
              <br /> (602) 867-1010
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

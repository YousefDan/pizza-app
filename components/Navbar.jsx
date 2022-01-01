import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <section className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/telephone.png"
            alt="phone logo"
            width={32}
            height={32}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </section>
      <section className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.png" alt="logo" width={160} height={69} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </section>
      <section className={styles.item}>
        <div className={styles.cart}>
          <Link href="/cart">
            <Image src="/images/cart.png" alt="cart" width={30} height={30} />
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

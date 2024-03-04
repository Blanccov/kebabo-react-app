import Navbar from "../../components/layouts/Navbar";
import styles from "../NoMatch/NoMatch.module.scss";
import LogoIcon from "../../assets/logo-icon.svg";

const NoMatch = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={`${styles["main__text-area"]}`}>
        <div className={styles.logo}>
          <img src={LogoIcon} alt="" />
        </div>
        <h1 className={`${styles.main__text}`}>
          This page is still building ;D
          <h3 className={`${styles.main__subtext}`}>Page not found!</h3>
        </h1>
      </div>
    </main>
  );
};

export default NoMatch;

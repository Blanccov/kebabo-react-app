import styles from "./Home.module.scss";
import ProductsOffer from "../../data/ProductsOffer";

import Button from "../../components/ui/Button";
import Banner from "./Banner";
import Navbar from "../../components/layouts/Navbar";

import SteakPhoto from "../../assets/steak-photo.png";
import CardProduct from "../../components/ui/CardProduct";
const Home = () => {
  const cardProducts = ProductsOffer();
  return (
    <main className={`${styles.main}`}>
      <header className={`${styles.header}`}>
        <Navbar />
        <div className={`${styles["header__text-area"]}`}>
          <h1 className={`${styles.header__text}`}>
            What womans?!
            <br />
            Kebabo!!!
          </h1>
          <h2 className={`${styles.header__subtext}`}>
            Come and enjoy your meal!
          </h2>
          <Button className={`${styles.header__btn}`} color="white">
            Login
          </Button>
        </div>
        <Banner />
      </header>
      <section className={`${styles.generator}`}>
        <img
          className={`${styles["generator__steak-img"]}`}
          src={SteakPhoto}
          alt=""
        />
        <div className={`${styles.generator__text}`}>
          <span>Kebab generator</span>
          <h1>Kebab Generator</h1>
          <h2>
            Here, you can craft your dream kebab by selecting from our wide
            range of fresh ingredients. Choose your preferred base - be it
            succulent chicken, tender beef, flavorful lamb, or a hearty
            vegetarian option. Then, add your favorite veggies, sauces, and
            spices to create a kebab that's uniquely yours. It's easy, fun, and
            ensures you get exactly what you crave. Start building your perfect
            kebab now!
          </h2>
          <Button className={`${styles.generator__btn}`} color="#d9292b">
            Generate
          </Button>
        </div>
      </section>
      <section className={`${styles.menu}`}>
        <div className={styles.menu__text}>
          <span>Menu</span>
          <h1>Our Products</h1>
        </div>
        <div className={`${styles.menu__gallery}`}>
          {cardProducts.map((product) => (
            <CardProduct
              key={product.name}
              src={product.src}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <Button className={styles.menu__btn} color="white">
          More
        </Button>
      </section>
    </main>
  );
};

export default Home;

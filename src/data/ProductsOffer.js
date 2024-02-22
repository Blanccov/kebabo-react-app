import Kebab1Photo from "../assets/sultans-kebab-photo.png";
import Kebab2Photo from "../assets/bazaar-kebab-photo.png";
import Kebab3Photo from "../assets/ottoman-kebab-photo.png";
import Kebab4Photo from "../assets/anatolian-kebab-photo.png";

const ProductsOffer = () => {
    const cardProducts = [
      {
        src: Kebab1Photo,
        name: "Sultan's Delight Kebab",
        price: "15.00",
      },
      {
        src: Kebab2Photo,
        name: "Spice Bazaar Kebab",
        price: "28.50",
      },
      {
        src: Kebab3Photo,
        name: "Ottoman Feast Wrap",
        price: "20.50",
      },
      {
        src: Kebab4Photo,
        name: "Anatolian Grill Kebab",
        price: "12.00",
      },
    ];
  
    return cardProducts;
  };
  
  export default ProductsOffer;

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cart, setCart, totalItems } = useContext(CartContext);

  const dropDownHandler = () => {
    console.log({ CartContext });
    setCart(!cart);
  };
  return (
    <div onClick={dropDownHandler} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;

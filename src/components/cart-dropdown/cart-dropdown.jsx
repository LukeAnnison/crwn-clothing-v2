import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id}></CartItem>
        ))}
      </div>
      <Button buttonType="inverted">
        <span>CHECKOUT</span>
      </Button>
    </div>
  );
};

export default CartDropdown;

import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="header">
      <h2>Product</h2>
      <h2>Description</h2>
      <h2>Quantitiy</h2>
      <h2>Price</h2>
      <h2>Remove</h2>
      <div className="checkout-section">
        {cartItems.map((item) => (
          <CheckoutItem cartItem={item} key={item.id}></CheckoutItem>
        ))}
      </div>
    </div>
  );
};

export default Checkout;

const CheckoutItem = ({ checkoutItem }) => {
  const { image, title, quantity, price } = checkoutItem;
  return (
    <div className="container">
      <img src={image} alt="" />
      <p className="title">{title}</p>
      <div className="quantity-section">
        <div className="arrow"></div>
        <p className="quantity"> {quantity} </p>
        <div className="arrow"></div>
      </div>
      <p className="price">{price}</p>
      <div className="remove"></div>
    </div>
  );
};
export default CheckoutItem;

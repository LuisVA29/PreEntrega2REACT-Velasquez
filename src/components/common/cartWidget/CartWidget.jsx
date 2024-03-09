import { IoMdCart } from "react-icons/io";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart-widget-container">
      {<IoMdCart />}
      <p>0</p>
    </div>
  );
};

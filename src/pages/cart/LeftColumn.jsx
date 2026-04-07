import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const LeftColumn = ({ onOpenModal }) => {
  const { cartItems } = useSelector((state) => state.carts);
  return (
    <div className=" col-span-8  space-y-8">
      {cartItems?.map((cart) => {
        return <CartItem key={cart.id} onOpenModal={onOpenModal} cart={cart} />;
      })}
    </div>
  );
};

export default LeftColumn;

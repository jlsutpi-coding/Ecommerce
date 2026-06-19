import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const LeftColumn = ({ onOpenModal }) => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="lg:col-span-8 col-span-1  space-y-4 md:space-y-6 lg:space-y-8">
      {cartItems?.map((cart) => {
        return <CartItem key={cart.id} onOpenModal={onOpenModal} cart={cart} />;
      })}
    </div>
  );
};

export default LeftColumn;

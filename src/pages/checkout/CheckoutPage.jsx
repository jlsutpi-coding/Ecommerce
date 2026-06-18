import Breadcrumb from "../../components/Breadcrumb";
import CheckoutCards from "./CheckoutCards";
import CheckoutHeader from "./CheckoutHeader";
import ShippingPayment from "./ShippingPayment";

const CheckoutPage = () => {
  return (
    <main className=" w-[90%] lg:w-[70%] pt-22 lg:pt-32 dark:bg-[#0B1326] dark-transition pb-10 lg:pb-20 mx-auto">
      <Breadcrumb />
      <CheckoutHeader />
      <CheckoutCards />
      <ShippingPayment />
    </main>
  );
};

export default CheckoutPage;

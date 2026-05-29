import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";

import BtnPrimary from "../../components/BtnPrimary";
import { deleteFromCart } from "../../redux/features/cartSlice";

const DeleteModal = ({ openModal, setOpenModal, targetId }) => {
  const dispatch = useDispatch();

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900/60 backdrop-blur-sm p-5 md:p-0">
      <div className="bg-white dark-transition dark:bg-[#171F33]  lg:w-95 h-85 lg:h-95 rounded-xl flex flex-col justify-evenly items-center px-4 lg:px-8 shadow-xl">
        <RxCrossCircled className="text-red-600 w-20 h-20 lg:w-25 lg:h-25" />
        <h2 className=" lg:text-2xl  font-manrope text-mauve-600 dark-transition dark:text-[#DAE2FD]">
          Are you sure?
        </h2>
        <p className=" text-center text-sm text-gray-500">
          Do you want to delete this product? This process cannot be undone.
        </p>
        <div className="w-full flex  items-center gap-1">
          <BtnPrimary
            bg_color={"bg-gray-500"}
            additional={"grow"}
            onBtnClick={() => setOpenModal(false)}
          >
            cancel
          </BtnPrimary>
          <BtnPrimary
            bg_color={"bg-red-500"}
            aditionnal={"grow"}
            onBtnClick={() => {
              dispatch(deleteFromCart(targetId));
              setOpenModal(false);
            }}
          >
            delete
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

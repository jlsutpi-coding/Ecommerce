import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";

import BtnPrimary from "../../components/BtnPrimary";
import { deleteFromCart } from "../../features/cartSlice";

const DeleteModal = ({ openModal, setOpenModal, targetId }) => {
  const dispatch = useDispatch();

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-95 h-95 rounded-xl flex flex-col justify-evenly items-center px-8 shadow-xl">
        <RxCrossCircled className="text-red-600 text-[100px]" />
        <h2 className=" text-[25px]  font-manrope text-mauve-600">
          Are you sure?
        </h2>
        <p className=" text-center text-[14px] text-gray-500">
          Do you want to delete this product? This process cannot be undone.
        </p>
        <div className=" w-full flex  items-center gap-1 ">
          <BtnPrimary
            bg_color={"bg-gray-500"}
            text_color={"text-white"}
            aditionnal={"grow"}
            onBtnClick={() => setOpenModal(false)}
          >
            cancel
          </BtnPrimary>
          <BtnPrimary
            bg_color={"bg-red-500"}
            text_color={"text-white"}
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

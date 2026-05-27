import { useCallback, useEffect, useState } from "react";

import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import DeleteModal from "./DeleteModal";
import TitleSection from "../../components/TitleSection";
import Breadcrumb from "../../components/Breadcrumb";

const CartPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const triggerDeleteModal = useCallback((id) => {
    setTargetId(id);
    setOpenModal(true);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove class if component unmounts while modal is open
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openModal]);

  return (
    <main className="max-w-screen-2xl pt-22 lg:pt-32  px-4 md:px-6 lg:px-8 xl:px-12 bg-[#f8f9fa] dark:bg-[#0B1326] dark-transition pb-10 lg:pb-20 mx-auto">
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        targetId={targetId}
      />
      <Breadcrumb />
      <TitleSection
        title="Shopping Bag"
        description="Review your selected pieces from the Archive."
      />

      <div className="  grid lg:grid-cols-12 gap-4  lg:gap-12 items-start">
        <LeftColumn onOpenModal={triggerDeleteModal} />
        <RightColumn />
      </div>
    </main>
  );
};

export default CartPage;

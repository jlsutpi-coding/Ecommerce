import React from "react";

const LeftSection = ({ thumbnail, images }) => {
  return (
    <>
      {/* Left : Image Gallery (Bento style) */}
      <div className="lg:col-span-6 grid grid-cols-6 gap-4">
        <div className="col-span-6  rounded-xl overflow-hidden bg-surface-container-low">
          <img
            src={thumbnail}
            className="w-full h-full mx-auto object-contain"
            alt=""
          />
        </div>
        {images?.map((item, index) => (
          <div
            key={index}
            className="col-span-2 aspect-square rounded-xl overflow-hidden bg-surface-container-low"
          >
            <img className="w-full h-full object-cover" src={item} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSection;

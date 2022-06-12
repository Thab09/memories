import React from "react";

function Modal({ selectedImage, setSelectedImage }) {
  const removeModal = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="backdrop" onClick={removeModal}>
      <img src={selectedImage} alt="enlarged pic" />
    </div>
  );
}

export default Modal;

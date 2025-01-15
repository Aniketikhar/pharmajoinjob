"use client";

import React, { useEffect, useState } from "react";
import PopUpModal from "./PopUpModal";

const WrapPopUp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Show the modal when the page loads
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <PopUpModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default WrapPopUp;

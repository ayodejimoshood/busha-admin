import React, {useState} from "react";
// import Modal from "react-bootstrap/Modal";
import AddNewWalletSidebar from "./AddNewWalletSidebar";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import Button from "react-bootstrap/Button";
import "./AddNewWalletButton.css";

const AddNewWalletButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="AddNewWalletButton" stylex={{right: 250, position: 'absolute'}}>
        <span onClick={() => setIsOpen(true)}>+ Add new wallet</span>
      </div>
      {isOpen && <AddNewWalletSidebar setIsOpen={setIsOpen} />}
      </div>
    
  );
};

export default AddNewWalletButton;

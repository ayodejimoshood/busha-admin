import React from "react";
import "./walletsidebar.css";

// import styled from "styled-components";
const AddNewWallet = ({ toggle }) => {
  return (
    <>
      {/* <OpenIcon onClick={toggle}>open sidebar</OpenIcon> */}
      <div className="AddNewWalletButton" stylex={{right: 250, position: 'absolute'}}>
        {/* <Button variant="warning">Warning Button in React</Button> */}
          <span toggle={toggle} onClick={toggle}>+ Add new wallet</span>
        </div>
    </>
  );
};

// const Span = styled.button`
//   font-size: 15px;
//   background-color: transparent;
//   color: '#000000';
//   padding: 10px;
// `;

export default AddNewWallet;

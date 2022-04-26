import React from "react";
// import { SidebarcContainer, CloseIcon } from "./SidebarElements.js";
import styled from "styled-components";

const WalletSidebar = ({ isOpen, toggle}) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen}>
      <CloseIcon onClick={toggle}> x </CloseIcon>
    </SidebarContainer>
    </>
  );
};

export default WalletSidebar;



export const SidebarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: green;
  z-index: 10;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const CloseIcon = styled.button`
  position: relative;
  height: 20px;
  width: 20px;
  background: red;
  z-index: 11;
  top: 0;
  left: 50px;
`;
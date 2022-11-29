import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  opened: boolean;
  footer?: React.ReactNode;
};

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.borderRadiuses.large};
  z-index: 1;
  padding: 40px 40px 81px 40px;
  height: calc(100vh - 150px);
  max-height: 600px;
  min-height: 400px;
  overflow: hidden;
  position: relative;
`;

const ModalContainer = styled.div<{ opened: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ opened }) => (opened ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Content = styled.div`
  overflow-y: auto;
  height: 98%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 1;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 8px 24px rgba(0, 0, 0, 0.12);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
`;

const Modal: React.FC<Props> = ({ children, onClose, opened, footer }) => {
  return (
    <ModalContainer opened={opened}>
      <StyledModal>
        <CloseButton onClick={onClose}>
          <img src={require("../../assets/icons/close.svg").default} alt="" />
        </CloseButton>
        <Content>{children}</Content>
        {footer && <Footer>{footer}</Footer>}
      </StyledModal>
      <Overlay />
    </ModalContainer>
  );
};

export default Modal;

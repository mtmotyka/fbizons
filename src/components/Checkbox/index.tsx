import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 15px;
`;

const Label = styled.label<{ checked: boolean }>`
  display: flex;
  position: relative;
  cursor: pointer;
  padding-left: 30px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.common.text};
  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.borderRadiuses.small};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme, checked }) =>
      checked ? theme.colors.secondary : "transparent"};
    transition: all 0.25s;
    z-index: 0;
  }
  &:after {
    position: absolute;
    content: "";
    top: 4px;
    left: 5px;
    width: 8px;
    height: 4px;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    transform: rotate(-45deg);
    display: ${({ checked }) => (checked ? "block" : "none")};
    z-index: 1;
  }
`;

const Input = styled.input`
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkbox: React.FC<Props> = (props) => {
  return (
    <Container>
      <Label
        checked={props.checked || false}
        htmlFor={props.name}
        aria-hidden="true"
      >
        <Input {...props} type="checkbox" />
        {props.label}
      </Label>
    </Container>
  );
};

export default Checkbox;

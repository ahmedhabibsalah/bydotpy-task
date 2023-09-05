import styled from "styled-components";
import { Link } from "react-router-dom";
import { backgroundColor, textColor } from "../../globalStyles";

export const AppBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  height: 60px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  color: ${textColor};
  font-weight: 700;
  &:hover,
  &:focus {
    color: gray;
  }
  &:active {
    color: gray;
  }
`;

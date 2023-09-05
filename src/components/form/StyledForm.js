import styled from "styled-components";
import { backgroundColor, textColor } from "../../globalStyles";

export const Main = styled.div`
  text-align: center;
  background: ${backgroundColor};
  color: ${textColor};
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: "center";
  width: 100%;
`;
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: "center";
  width: 100%;
`;
export const Input = styled.input`
  padding: 1%;
  width: 50%;
  margin: 1% 2%;
  border-radius: 20px;
`;
export const Button = styled.button`
  font-weight: bold;
  background: blueviolet;
  border-radius: 20px;
  border: none;
  color: white;
  padding: 1%;
  cursor: pointer;
`;

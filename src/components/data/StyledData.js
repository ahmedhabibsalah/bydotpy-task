import styled from "styled-components";
import { backgroundColor, textColor } from "../../globalStyles";

export const Card = styled.div`
  background: ${backgroundColor};
  color: ${textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  min-height: 300px;
  gap: 1rem;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 10px;
  width: 300px;
  text-align: center;
  overflow: auto;
`;
export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`;
export const CardBody = styled.p`
  font-size: 1rem;
  font-weight: normal;
  flex-grow: 1;
`;

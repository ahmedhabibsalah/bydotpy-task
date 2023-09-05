import styled from "styled-components";
import { backgroundColor, textColor } from "../../globalStyles";

export const Container = styled.section`
  background: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 40px;
  flex-wrap: wrap;
  gap: 2rem;
  height: 100vh;
`;
export const LeftSide = styled.div`
  display: flex;
  max-width: 500px;
`;
export const Title = styled.h1`
  color: ${textColor};
  font-size: 3rem;
  font-weight: 700;
`;
export const RightSide = styled.div`
  display: flex;
  max-height: "400px";
  max-width: "300px";
`;

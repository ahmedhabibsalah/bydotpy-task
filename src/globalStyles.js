import theme from "styled-theming";
import styled from "styled-components";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const Container = styled.section`
  background: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 40px;
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 100vh;
`;

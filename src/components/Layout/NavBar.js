import React from "react";
import { AppBar, ItemLink } from "./StyledNav";

export default function NavBar() {
  return (
    <AppBar>
      <ItemLink to="/">Home</ItemLink>
      <ItemLink to="/form">Form</ItemLink>
      <ItemLink to="/data">Data</ItemLink>
      <p>
        <input type="checkbox"></input> Use Dark Theme
      </p>
    </AppBar>
  );
}

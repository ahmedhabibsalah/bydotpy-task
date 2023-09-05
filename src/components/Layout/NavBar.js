import React from "react";
import { AppBar, ItemLink } from "./StyledNav";
import DarkThemeToggle from "./DarkThemeToggle";

export default function NavBar() {
  return (
    <AppBar>
      <ItemLink to="/">Home</ItemLink>
      <ItemLink to="/form">Form</ItemLink>
      <ItemLink to="/data">Data</ItemLink>
      <DarkThemeToggle />
    </AppBar>
  );
}

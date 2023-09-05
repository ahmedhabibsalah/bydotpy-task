import React, { useContext } from "react";
import { AppBar, ItemLink } from "./StyledNav";
import DarkThemeToggle from "./DarkThemeToggle";
import LanguageSelector from "../languages/LanguageSelector";
import { LanguageContext } from "../../container/Language";

export default function NavBar() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <AppBar>
      <ItemLink to="/">{dictionary.homeLink}</ItemLink>
      <ItemLink to="/form">{dictionary.formLink}</ItemLink>
      <ItemLink to="/data">{dictionary.dataLink}</ItemLink>
      <DarkThemeToggle />
      <LanguageSelector />
    </AppBar>
  );
}

/* eslint-disable eqeqeq */
import React, { useContext, useState } from "react";
import { Button, Input, Main, FormContainer } from "./StyledForm";
import { LanguageContext } from "../../container/Language";

export default function Form() {
  const { dictionary } = useContext(LanguageContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    if (fullName.length == 0) {
      alert(dictionary.fullNameErr);
      return;
    }

    if (email.length == 0) {
      alert(dictionary.emailErr);
      return;
    }

    if (password.length < 8) {
      alert(dictionary.passwordErr);
      return;
    }

    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        countDigit++;
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUpperCase++;
        }
        if (password[i] == password[i].toLowerCase()) {
          countLowerCase++;
        }
      }
    }

    if (countLowerCase == 0) {
      alert(dictionary.lCase);
      return;
    }

    if (countUpperCase == 0) {
      alert(dictionary.uCase);
      return;
    }

    if (countDigit == 0) {
      alert(dictionary.digit);
      return;
    }

    if (countSpecialCharacters == 0) {
      alert(dictionary.specialCrc);
      return;
    }

    alert(dictionary.success);
  }
  return (
    <Main>
      <FormContainer>
        <Input
          placeholder={dictionary.fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder={dictionary.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={dictionary.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          onClick={() => {
            validateForm();
          }}
        >
          {dictionary.subm}
        </Button>
      </FormContainer>
    </Main>
  );
}

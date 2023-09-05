import React, { useContext } from "react";
import { Container, LeftSide, RightSide, Title } from "./StyledHome";
import { LanguageContext } from "../../container/Language";

export default function Home() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Container>
      <LeftSide>
        <Title>{dictionary.title}</Title>
      </LeftSide>
      <RightSide>
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
          alt="mockup"
          height={400}
          width={300}
        />
      </RightSide>
    </Container>
  );
}

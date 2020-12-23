import React from "react";
import { FaqsContainer } from "../containers/faqsContainer";
import { FooterContainer } from "../containers/footerContainer";
import { HeaderContainer } from "../containers/headerContainer";
import { JumbotronContainer } from "../containers/jumbotronContainer";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

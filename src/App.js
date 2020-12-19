import React from "react";
import { FooterContainer } from "./containers/footerContainer";
import { JumbotronContainer } from "./containers/jumbotronContainer";
import { FaqsContainer } from "./containers/faqsContainer";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

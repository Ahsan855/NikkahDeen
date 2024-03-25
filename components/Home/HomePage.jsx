import React from "react";
import Header from "./HeroSection";
import BiodataPattiri from "../Biodata/BiodataPattiri";
import Procedure from "../Procedure/Procedure";
import Review from "../Review/Review";

export default function HomePage() {
  return (
    <div>
      <Header />
      <BiodataPattiri />
      <Procedure />
      <Review />
    </div>
  );
}

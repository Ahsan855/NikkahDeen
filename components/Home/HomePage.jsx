import React from "react";
import Header from "./HeroSection";
import BiodataPattiri, { biodatabright } from "../Biodata/BiodataPattiri";
import Procedure from "../Procedure/Procedure";
import Review from "../Review/Review";
import MemberShip from "../MemberShip/MemberShip";
import BiodataPattoro, { biodatagroom } from "../Biodata/BiodataPattoro";
import BiodataBoth, { biodataBoth } from "../Biodata/BiodataBoth";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MemberShip />
      <BiodataBoth biodataBoth={biodataBoth} />
      <BiodataPattoro biodatagroom={biodatagroom} />
      <BiodataPattiri biodatabright={biodatabright} />
      <Procedure />
      <Review />
    </div>
  );
}

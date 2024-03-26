import React from "react";
import Header from "./HeroSection";
import BiodataPattiri, { biodatabright } from "../Biodata/BiodataPattiri";
import Procedure from "../Procedure/Procedure";
import Review from "../Review/Review";
import MemberShip from "../MemberShip/MemberShip";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MemberShip />
      <BiodataPattiri biodatabright={biodatabright} />
      <Procedure />
      <Review />
    </div>
  );
}

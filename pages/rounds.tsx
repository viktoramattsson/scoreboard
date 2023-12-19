import React from "react";
import RoundsComponent from "../components/RoundsComponent";

import Link from "next/link";

function Rounds() {
  return (
    <>
      <h1>Play rounds</h1>

      <RoundsComponent />

      <Link href="/">Home</Link>
    </>
  );
}

export default Rounds;

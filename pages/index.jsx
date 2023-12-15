import Link from "next/link";
import React, { useContext } from "react";
import ResumeResetComponent from "@/components/ResumeResetComponent";
import AppContext from "../components/AppContext";

function Home() {
  const context = useContext(AppContext);
  function handleClick() {
    if (context.playerName.length > 0) {
      <ResumeResetComponent />;
      console.log("testa popup");
    }
  }

  return (
    <>
      <ul>
        <li>
          <Link href="rounds" onClick={handleClick}>
            Play rounds
          </Link>
        </li>
        <li>Other game</li>
      </ul>
    </>
  );
}

export default Home;

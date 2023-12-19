import Link from "next/link";
import React, { useContext } from "react";
import ResumeResetComponent from "../components/ResumeResetComponent";
import AppContext from "../components/AppContext";

function Home() {
  const context = useContext(AppContext);

  function handleClick() {
    if (context && context.playerName && context.playerName.length > 0) {
      return <ResumeResetComponent />;
    }
    console.log("testa popup");
  }

  return (
    <>
      <ul>
        <li>
          <Link href="/rounds">
            <a onClick={handleClick}>Play rounds</a>
          </Link>
        </li>
        <li>Other game</li>
      </ul>
    </>
  );
}

export default Home;

// import "@/styles/globals.css";
import { useState, createContext } from "react";
import AppContext from "@/components/AppContext";
import PlayerScoresContext from "@/components/PlayerScoresContext";
import HeaderComponent from "@/components/HeaderComponent";
function App({ Component, pageProps }) {
  const [playerName, setPlayerName] = useState([]);
  const [playerScores, setPlayerScores] = useState();

  return (
    <>
      <HeaderComponent />
      <AppContext.Provider value={{ playerName, setPlayerName }}>
        <PlayerScoresContext.Provider value={{ playerScores, setPlayerScores }}>
          <Component {...pageProps} />
        </PlayerScoresContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;

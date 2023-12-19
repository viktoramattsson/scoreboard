// import "@/styles/globals.css";
import React, { useState, createContext, ReactNode } from "react";
import AppContext from "@/components/AppContext";
import PlayerScoresContext from "@/components/PlayerScoresContext";
import HeaderComponent from "@/components/HeaderComponent";

interface PageProps {

}

interface AppProps {
  Component: React.ComponentType<PageProps>;
  pageProps: PageProps;
}

interface PlayerScoresContextValue {
  playerScores: number | undefined;
  setPlayerScores: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const [playerName, setPlayerName] = useState<string[]>([]);
  const [playerScores, setPlayerScores] = useState<number | undefined>();

  const appContextValue = { playerName, setPlayerName };
  const playerScoresContextValue: PlayerScoresContextValue = {
    playerScores,
    setPlayerScores,
  };

  return (
    <>
      <HeaderComponent />
      <AppContext.Provider value={appContextValue}>
        <PlayerScoresContext.Provider value={playerScoresContextValue}>
          <Component {...pageProps} />
        </PlayerScoresContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;

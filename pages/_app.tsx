// import "@/styles/globals.css";
import React, { useState, createContext, ReactNode } from "react";
import AppContext from "@/components/AppContext";
import PlayerScoresContext from "@/components/PlayerScoresContext";
import HeaderComponent from "@/components/HeaderComponent";

interface PageProps {
// Define the structure of your pageProps
  // Adjust these types based on the actual structure of your pageProps
  // For example, if pageProps is an object with a key 'example' of type string,
  // you can replace any with { example: string }
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

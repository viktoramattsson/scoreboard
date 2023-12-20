import { createContext } from "react";

const PlayerScoresContext = createContext<unknown | undefined>(undefined);
// samma som i appContext. korrekt?
export default PlayerScoresContext;

import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const LogicContext = ({ children }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turn, setTurn] = useState(0);
  const value = {
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    turn,
    setTurn,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
export default LogicContext;

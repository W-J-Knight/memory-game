import { PropTypes } from "prop-types";
import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const LogicContext = ({ children }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turn, setTurn] = useState(0);
  const value = {
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    turn,
    setTurn,
    setDisabled,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
LogicContext.proTypes = {
  children: PropTypes.node.isRequired,
};
export default LogicContext;

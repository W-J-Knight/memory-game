import { useEffect } from "react";
import { useGameContext } from "../context/gameLogicContext";


const useCompare = () => {
  const {
    setChoiceOne,
    setChoiceTwo,
    setTurn,
    choiceOne,
    choiceTwo,
    setDisabled,
  } = useGameContext();
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.Icon === choiceTwo.Icon) {
        choiceOne.matched = true;
        choiceTwo.matched = true;
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [choiceOne, choiceTwo]);
  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((preValue) => preValue + 1);
    setDisabled(false);
  };
};

export default useCompare;

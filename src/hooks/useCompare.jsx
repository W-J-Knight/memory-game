import { useEffect } from "react";
import { useGameContext } from "../context/gameLogicContext";

const useCompare = () => {
  const { setChoiceOne, setChoiceTwo, setTurn, choiceOne, choiceTwo } =
    useGameContext();

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.Icon === choiceTwo.Icon) {
        console.log("Those cards match");
        resetTurn();
      } else {
        console.log("Those cards don't match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);
  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((preValue) => preValue + 1);
  };
};

export default useCompare;

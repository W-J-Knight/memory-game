import { useEffect } from "react";
import { useGameContext } from "../context/gameLogicContext";
import { useGlobalContext } from "../context/cardDeckContext";

const useCompare = () => {
  const { setChoiceOne, setChoiceTwo, setTurn, choiceOne, choiceTwo } =
    useGameContext();
  const { setShuffledCards, shuffledCards } = useGlobalContext;
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.Icon === choiceTwo.Icon) {
        choiceOne.matched = true;
        choiceTwo.matched = true;
        resetTurn();
      } else {
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

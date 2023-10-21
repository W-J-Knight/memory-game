import { useEffect } from "react";
import CardDeck from "../../components/cardDeck/CardDeck";
import { useGlobalContext } from "../../context/cardDeckContext";
import ShuffleCards from "../../hooks/ShuffleCards";
import styles from "./Home.module.css";
import useRefresh from "../../hooks/useRefresh";
import { useGameContext } from "../../context/gameLogicContext";
const Home = () => {
  const { setShuffledCards, cardsFrontIcons, back } = useGlobalContext();
  const { setChoiceOne, setChoiceTwo, turns, setTurns } = useGameContext();
  const newGame = () => {
    ShuffleCards(cardsFrontIcons, setShuffledCards, back);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(preValue => preValue = 0)
  };
  useRefresh();

  return (
    <article>
      <h1>Happy Halloween</h1>
      <section className={styles.action}>
        <button
          onClick={() => {
            newGame();
          }}
          className={styles.button}
        >
          New Game
        </button>
        <p>Turns: {turns}</p>
      </section>

      <CardDeck />
    </article>
  );
};

export default Home;

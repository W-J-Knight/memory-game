import { useState } from "react";
import CardDeck from "../../components/cardDeck/CardDeck";
import { useGlobalContext } from "../../context/cardDeckContext";
import ShuffleCards from "../../hooks/ShuffleCards";
import styles from "./Home.module.css";
import LogicContext from "../../context/gameLogicContext";
const Home = () => {
  const {setShuffledCards, cardsFrontIcons, back } =
    useGlobalContext();
 
  const newGame = () => {
    ShuffleCards(cardsFrontIcons, setShuffledCards, back);
  };

  return (
    <section>
      <h1>Home</h1>
      <button
        onClick={() => {
          newGame();
        }}
      >
        New Game
      </button>
      <LogicContext>
        <CardDeck />
      </LogicContext>
    </section>
  );
};

export default Home;

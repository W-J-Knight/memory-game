import CardDeck from "../../components/cardDeck/CardDeck";
import { useGlobalContext } from "../../context/cardDeckContext";
import ShuffleCards from "../../hooks/ShuffleCards";
import styles from "./Home.module.css";
const Home = () => {
  const { shuffledCards, setShuffledCards, cardsFrontIcons, cardsBackIcons } =
    useGlobalContext();
    const back =
      cardsBackIcons[Math.floor(Math.random() * cardsBackIcons.length)];
  const newGame = () => {
    ShuffleCards(cardsFrontIcons, setShuffledCards, back);
  };
  console.log(shuffledCards);

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
      <CardDeck />
    </section>
  );
};

export default Home;

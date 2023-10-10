import { useGlobalContext } from "../../context/cardDeckContext";
import ShuffleCards from "../../hooks/ShuffleCards";
import styles from "./Home.module.css"
const Home = () => {
  const { shuffledCards, setShuffledCards, cardsIcons } = useGlobalContext();
  const newGame = () => {
    ShuffleCards(cardsIcons, setShuffledCards);
  };
  // console.log(cardsIcons);
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
    </section>
  );
};

export default Home;

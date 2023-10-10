import { useGlobalContext } from "../../context/cardDeckContext";
import ShuffleCards from "../../hooks/ShuffleCards";
const Home = () => {
  const { shuffledCards, setShuffledCards, cardsIcons } = useGlobalContext();
  const newGame = () => {
    ShuffleCards(cardsIcons, setShuffledCards);
  };
  // console.log(cardsIcons);
  console.log(shuffledCards);
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          newGame();
        }}
      >
        New Game
      </button>
    </>
  );
};

export default Home;

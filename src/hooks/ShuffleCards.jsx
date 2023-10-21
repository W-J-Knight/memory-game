const ShuffleCards = (cardsFrontIcons, setValue, back) => {

  setValue(
    (preValue) =>
      (preValue = [...cardsFrontIcons, ...cardsFrontIcons]
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({ ...card, id: index + 1, ...back })))
  );
};

export default ShuffleCards;

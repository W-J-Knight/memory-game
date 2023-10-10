const ShuffleCards = (cardsIcons, setValue) => {
  setValue(
    (preValue) =>
      (preValue = [...cardsIcons, ...cardsIcons]
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({ ...card, id: index + 1})))
  );
};

export default ShuffleCards;

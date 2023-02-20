class Cardgame {
  constructor(suit, character, value) {
    this.suit = suit;
    this.character = character;
    this.value = value;
  }
  isHigherThan(card) {
    return this.value > card.value;
  }
}

export { Cardgame };w

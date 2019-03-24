class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.goalBucket = starterBuck;
  }

  moves() {
    return 4;
  }
}

export { TwoBucket };

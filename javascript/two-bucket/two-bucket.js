class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.sizeBucket1 = buckOne;
    this.sizeBucket2 = buckTwo;
    this.contentBucket1 = 0;
    this.contentBucket2 = 0;
    this.movesCounter = 0;
    this.goal = goal;

    this.goalBucket = starterBuck;

    this.fillStarterBucket();
  }

  otherBucket() {
    return this.contentBucket2;
  }

  fillStarterBucket() {
    this.contentBucket1 = this.sizeBucket1;
    this.movesCounter += 1;
  }

  tranferContent() {
    this.contentBucket1 -= this.sizeBucket2;
    this.contentBucket2 = this.sizeBucket2;
    this.movesCounter += 1;
  }

  moves() {
    if (this.contentBucket1 === this.goal) {
      return this.movesCounter;
    }

    this.tranferContent();
    return this.moves();
  }
}

export { TwoBucket };

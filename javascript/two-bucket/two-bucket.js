class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.sizeBucket1 = buckOne;
    this.sizeBucket2 = buckTwo;
    this.contentBucket1 = 0;
    this.contentBucket2 = 0;
    this.movesCounter = 0;
    this.goal = goal;

    this.goalBucket = starterBuck;
  }

  otherBucket() {
    return this.contentBucket2;
  }

  fillStarterBucket() {
    this.contentBucket1 = this.sizeBucket1;
    this.movesCounter += 1;
  }

  transferContent() {
    if (this.contentBucket2 === this.sizeBucket2) {
      return;
    }

    if (this.contentBucket1 === 0) {
      return;
    }

    this.contentBucket2 = this.contentBucket1;
    this.contentBucket1 = 0;
    // this.contentBucket1 -= this.sizeBucket2;
    // this.contentBucket2 = this.sizeBucket2;
    // this.movesCounter += 1;
  }

  empty () {
    this.contentBucket2 = 0;
    this.movesCounter += 1;
  }

  moves() {
    this.fillStarterBucket();
    return this.calculateMoves();
  }

  calculateMoves() {
    if (this.contentBucket1 === this.goal) {
      return this.movesCounter;
    }

    if (this.contentBucket2 === 0) {
      this.transferContent();
    } else {
      this.empty();
    }

    return this.calculateMoves();
  }
}

export { TwoBucket };

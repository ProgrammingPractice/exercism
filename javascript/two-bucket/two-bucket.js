class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
  	this.moves_counter = 0;
    this.goalBucket = starterBuck;
  	this.otherBucket = 0;

    this.fill_starter_bucket();
  }

  fill_starter_bucket() {
  	this.moves_counter += 1;
  }

  moves() {
    return this.moves_counter;
  }
}

export { TwoBucket };

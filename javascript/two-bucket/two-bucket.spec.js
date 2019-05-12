import { TwoBucket } from './two-bucket';

describe('TwoBucket', () => {
  xdescribe('works for input of 1, 1, 1', () => {
    const buckOne = 1;
    const buckTwo = 1;
    const goal = 1;

    test('starting with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);

      expect(twoBucket.moves()).toEqual(1);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket()).toEqual(0);
    });
  });

  xdescribe('works for input of 2, 1, 1', () => {
    const buckOne = 2;
    const buckTwo = 1;
    const goal = 1;

    test('starting with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(2);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket()).toEqual(1);
    });
    // 2 0 f
    // 1 1 t
  });

  xdescribe('works for input of 3, 1, 1', () => {
    const buckOne = 3;
    const buckTwo = 1;
    const goal = 1;

    test('starting with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(4);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket()).toEqual(1);
    });
    // 3 0 f
    // 2 1 t
    // 2 0 e
    // 1 1 t
  });

  xdescribe('works for input of 3, 2, 1', () => {
    const buckOne = 3;
    const buckTwo = 2;
    const goal = 1;

    test('starting with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(2);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket()).toEqual(2);
    });
    // 3 0 f
    // 1 2 t
  });

  xdescribe('works for input of 3, 2, 2', () => {
    const buckOne = 3;
    const buckTwo = 2;
    const goal = 2;

    xtest('starting with bucket one', () => {
      const starterBuck = 'one';
      const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
      expect(twoBucket.moves()).toEqual(6);
      expect(twoBucket.goalBucket).toEqual('one');
      expect(twoBucket.otherBucket()).toEqual(2);
    });
    // 3 0 f
    // 1 2 t
    // 1 0 e
    // 0 1 t
    // 3 1 f
    // 2 2 t
  });

  describe('transfer works for all cases', () => {
    const buckOne = 3;
    const buckTwo = 5;
    const goal = 0;
    const starterBuck = 'one';

    test('when source is empty nothing changes', () => {
      // source empty, destination partially full
      const twoBucket = new TwoBucket(3, 5, goal, starterBuck);
      twoBucket.contentBucket1 = 0;
      twoBucket.contentBucket2 = 3;
      twoBucket.transferContent();
      expect(twoBucket.contentBucket1).toEqual(0);
      expect(twoBucket.contentBucket2).toEqual(3);
    });

    test('when destination is full nothing changes', () => {
      // source empty, destination full
      // source partially full, destination full
      // source full, destination full
      const twoBucket = new TwoBucket(3, 5, goal, starterBuck);
      twoBucket.contentBucket1 = 3;
      twoBucket.contentBucket2 = 5;
      twoBucket.transferContent();
      expect(twoBucket.contentBucket1).toEqual(3);
      expect(twoBucket.contentBucket2).toEqual(5);
    });

    test('when the whole content of source fits into the destination', () => {
      const twoBucket = new TwoBucket(3, 5, goal, starterBuck);
      twoBucket.contentBucket1 = 3;
      twoBucket.contentBucket2 = 0;
      twoBucket.transferContent();
      expect(twoBucket.contentBucket1).toEqual(0);
      expect(twoBucket.contentBucket2).toEqual(3);
    });

    // source partially full, destination partially full

    // source full, destination empty
    // - capacities of 3 and 5
    // - capacities of 5 and 3
    // source full, destination partially full

    // source partially full, destination empty
  });

  // describe('works for input of 3, 5, 1', () => {
  //   const buckOne = 3;
  //   const buckTwo = 5;
  //   const goal = 1;

  //   xtest('starting with bucket one', () => {
  //     // indicates which bucket to fill first
  //     const starterBuck = 'one';
  //     const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
  //     // includes the first fill
  //     expect(twoBucket.moves()).toEqual(4);
  //     // which bucket should end up with the desired # of liters
  //     expect(twoBucket.goalBucket).toEqual('one');
  //     // leftover value in the "other" bucket once the goal has been reached
  //     expect(twoBucket.otherBucket()).toEqual(5);
  //   });

  //   xtest('starting with bucket two', () => {
  //     const starterBuck = 'two';
  //     const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
  //     expect(twoBucket.moves()).toEqual(8);
  //     expect(twoBucket.goalBucket).toEqual('two');
  //     expect(twoBucket.otherBucket()).toEqual(3);
  //   });
  // });

  // describe('works for input of 7, 11, 2', () => {
  //   const buckOne = 7;
  //   const buckTwo = 11;
  //   const goal = 2;

  //   xtest('starting with bucket one', () => {
  //     const starterBuck = 'one';
  //     const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
  //     expect(twoBucket.moves()).toEqual(14);
  //     expect(twoBucket.goalBucket).toEqual('one');
  //     expect(twoBucket.otherBucket()).toEqual(11);
  //   });

  //   xtest('starting with bucket two', () => {
  //     const starterBuck = 'two';
  //     const twoBucket = new TwoBucket(buckOne, buckTwo, goal, starterBuck);
  //     expect(twoBucket.moves()).toEqual(18);
  //     expect(twoBucket.goalBucket).toEqual('two');
  //     expect(twoBucket.otherBucket()).toEqual(7);
  //   });
  // });
});

// Initial: 7 11 2 one
// 7 0 f
// 0 7 t
// 7 7 f
// 3 11 t
// 3 0 e
// 0 3 t
// 7 3 f
// 0 10 t
// 7 10 f
// 6 11 t
// 6 0 e
// 0 6 t
// 7 6 f
// 2 11 t

// Initial: 7 11 2 two
// 0 11 f
// 7 4  t
// 0 4  e
// 4 0  t
// 4 11 f
// 7 8  t
// 0 8  e
// 7 1  t
// 0 1  e
// 1 0  t
// 1 11 f
// 7 5  t
// 0 5  e
// 5 0  t
// 5 11 f
// 7 9  t
// 0 9  e
// 7 2  t

// Intial: 3 5 1
// 3 0 f
// 0 3 t
// 3 3 f
// 1 5 t

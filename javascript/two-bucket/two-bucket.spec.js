import { TwoBucket } from './two-bucket';

describe('TwoBucket', () => {
  describe('our tdd', () => {
    test('description', () => {
      expect(1 + 1).toEqual(2);
    });
  });

  describe('works for input of 1, 1, 1', () => {
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

  describe('works for input of 2, 1, 1', () => {
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

  describe('works for input of 3, 1, 1', () => {
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

//Intial: 3 5 1
// 3 0 f
// 0 3 t
// 3 3 f
// 1 5 t

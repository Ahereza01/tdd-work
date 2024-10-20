import { assert } from 'chai';  // Import 'assert' from Chai
import multiply from '../multiply.js';  // Import your multiply function

describe('Multiply Function', function() {
  it('should return 1 when multiplying 1 and 1', function() {
    assert.equal(multiply(1, 1), 1);
  });
});

it('should return 4 when multiplying 2 and 2', function() {
  assert.equal(multiply(2, 2), 4);
});

it('should return 4 when multiplying 2 and 2', function() {
  assert.equal(multiply(3, 3), 9);
});

it('should return 4 when multiplying 2 and 2', function() {
  assert.equal(multiply(4, 4), 16);
});

it('should return 4 when multiplying 2 and 2', function() {
  assert.equal(multiply(23, 45), 1035);
});







import {calculateParameter} from '../utils/scoring.js'

describe('Drink statisics', () => {
    it('calculates parameters for set values', () => {
        expect(calculateParameter(10, 50, 10, 50, 10)).toEqual(20);
        expect(calculateParameter(10, 40, 5, 60, 10)).toEqual(17);
        expect(calculateParameter(5, 20, 7, 80, 5)).toEqual(11.6);
    });
    it('calculates parameters for real values', () => {
        expect(calculateParameter(10, 50, 10, 50, 10)).toEqual(20); // remake this when scoring figured out
    })
});
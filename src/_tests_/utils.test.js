import {calculateParameter, calculateFanciness, simplifyStat} from '../utils/scoring.js'

describe('Drink statisics', () => {
    it('calculates parameters for set values', () => {
        expect(calculateParameter(10, 50, 10, 50, 10)).toEqual(20);
        expect(calculateParameter(10, 40, 5, 60, 10)).toEqual(17);
        expect(calculateParameter(5, 20, 7, 80, 5)).toEqual(11.6);
        expect(calculateFanciness(10, 10, 2, 8)).toEqual(20.00);
        expect(calculateFanciness(5, 5, 2, 5)).toEqual(11.33);
    });
    it('calculates parameters for real values', () => {
        expect(calculateParameter(10, 50, 10, 50, 10)).toEqual(20); // remake this when scoring figured out
    });
    it('simplifies parameters', () => {
        expect(simplifyStat(0)).toEqual(1);
        expect(simplifyStat(1)).toEqual(1);
        expect(simplifyStat(4)).toEqual(2);
        expect(simplifyStat(6)).toEqual(2);
        expect(simplifyStat(8)).toEqual(3);
        expect(simplifyStat(10)).toEqual(3);
        expect(simplifyStat(12)).toEqual(4);
        expect(simplifyStat(14)).toEqual(4);
        expect(simplifyStat(16)).toEqual(5);
        expect(simplifyStat(18)).toEqual(5);
        expect(simplifyStat(20)).toEqual(5);
    });
});

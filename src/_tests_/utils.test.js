import {calculateParameter, calculateFanciness, simplifyStat, calculateAllParameters} from '../utils/scoring.js'
import alcohols from '../data/alcohol';
import softDrinks from '../data/softDrinks';
import syrups from '../data/syrups';

describe('Drink calculations', () => {
    it('calculates parameters', () => {
        expect(calculateParameter(10, 50, 10, 50, 10)).toEqual(20);
        expect(calculateParameter(10, 40, 5, 60, 10)).toEqual(17);
        expect(calculateParameter(5, 20, 7, 80, 5)).toEqual(11.6);
        expect(calculateFanciness(10, 10, 2, 8)).toEqual(20.00);
        expect(calculateFanciness(5, 5, 2, 5)).toEqual(11.33);
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

describe('Drink statistics', () => {
    it('calculates stats for beer, orange juice and curacao, 50/50 proportions, 2 decorations', () => {
        expect(calculateParameter(alcohols[0].power, 50, softDrinks[3].power, 50, syrups[0].power)).toEqual(6.5);
        expect(calculateParameter(alcohols[0].sweet, 50, softDrinks[3].sweet, 50, syrups[0].sweet)).toEqual(14);
        expect(calculateParameter(alcohols[0].crazy, 50, softDrinks[3].crazy, 50, syrups[0].crazy)).toEqual(7);
        expect(calculateFanciness(alcohols[0].fancy, softDrinks[3].fancy, syrups[0].fancy, 2)).toEqual(2.67);
    });
    it('calculates simplified parameters for beer, orange juice and curacao, 50/50 proportions, 2 decorations', () => {
        expect((calculateAllParameters(alcohols[0], 50, softDrinks[3], 50, syrups[0],['decor1','decor2']).power)).toEqual(2);
        expect((calculateAllParameters(alcohols[0], 50, softDrinks[3], 50, syrups[0],['decor1','decor2']).sweet)).toEqual(4);
        expect((calculateAllParameters(alcohols[0], 50, softDrinks[3], 50, syrups[0],['decor1','decor2']).crazy)).toEqual(2);
        expect((calculateAllParameters(alcohols[0], 50, softDrinks[3], 50, syrups[0],['decor1','decor2']).fancy)).toEqual(1);
    });

    it('calculates stats for vodka, tomato juice and grenadine, 30/70 proportions, 2 decorations', () => {
        expect(calculateParameter(alcohols[1].power, 30, softDrinks[5].power, 70, syrups[1].power)).toEqual(10.1);
        expect(calculateParameter(alcohols[1].sweet, 30, softDrinks[5].sweet, 70, syrups[1].sweet)).toEqual(5);
        expect(calculateParameter(alcohols[1].crazy, 30, softDrinks[5].crazy, 70, syrups[1].crazy)).toEqual(13.5);
        expect(calculateFanciness(alcohols[1].fancy, softDrinks[5].fancy, syrups[1].fancy, 2)).toEqual(6);
    });

    it('calculates stats for rum, milk and coco, 20/80 proportions, 2 decorations', () => {
        expect(calculateParameter(alcohols[5].power, 20, softDrinks[1].power, 80, syrups[2].power)).toEqual(1);
        expect(calculateParameter(alcohols[5].sweet, 20, softDrinks[1].sweet, 80, syrups[2].sweet)).toEqual(13);
        expect(calculateParameter(alcohols[5].crazy, 20, softDrinks[1].crazy, 80, syrups[2].crazy)).toEqual(11.2);
        expect(calculateFanciness(alcohols[5].fancy, softDrinks[1].fancy, syrups[2].fancy, 2)).toEqual(12.67);
    });

    it('calculates stats for whiskey and cola, 30/70 proportions, 2 decorations', () => {
        expect(calculateParameter(alcohols[3].power, 30, softDrinks[0].power, 70, syrups[4].power)).toEqual(16.5);
        expect(calculateParameter(alcohols[3].sweet, 30, softDrinks[0].sweet, 70, syrups[4].sweet)).toEqual(8.5);
        expect(calculateParameter(alcohols[3].crazy, 30, softDrinks[0].crazy, 70, syrups[4].crazy)).toEqual(3.6);
        expect(calculateFanciness(alcohols[3].fancy, softDrinks[0].fancy, syrups[4].fancy, 2)).toEqual(10);
    });
});
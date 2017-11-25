import beer from '../images/beer.jpg';
import vodka from '../images/vodka.jpg';
import tequila from '../images/tequila.jpg';
import whiskey from '../images/whiskey.jpg';
import gin from '../images/gin.jpg';
import rum from '../images/rum.jpg';

const alcohol = [
    {
        name: "beer",
        power: 6,
        sweet: 0,
        crazy: 0,
        fancy: 0,
        image: beer
    },
    {
        name: "vodka",
        power: 40,
        sweet: 0,
        crazy: 5,
        fancy: 0,
        image: vodka
    },
    {
        name: "tequila",
        power: 38,
        sweet: 2,
        crazy: 3,
        fancy: 2,
        image: tequila
    },
    {
        name: "whiskey",
        power: 40,
        sweet: 1,
        crazy: 2,
        fancy: 3,
        image: whiskey
    },
    {
        name: "gin",
        power: 40,
        sweet: 3,
        crazy: 3,
        fancy: 2,
        image: gin
    },
    {
        name: "rum",
        power: 38,
        sweet: 5,
        crazy: 2,
        fancy: 3,
        image: rum
    }
];
export default alcohol;
export function calculateParameter (alcohol, alcoholAmount, softDrink, softDrinkAmount, syrup) {
    return alcohol * alcoholAmount / 100 + softDrink * softDrinkAmount / 100 + syrup;
}

export function calculateFanciness (alcohol, softDrink, syrup, decorations) {
    return ((alcohol + softDrink + syrup + decorations)*2/3).toFixed(2)/1;
}

export function calculateAllParameters(alcohol, alcoholAmount, softDrink, softDrinkAmount, syrup, decorations) {
    const power = calculateParameter(alcohol.power, alcoholAmount, softDrink.power, softDrinkAmount, syrup.power);
    const sweetness = calculateParameter(alcohol.sweet, alcoholAmount, softDrink.sweet, softDrinkAmount, syrup.sweet);
    const craziness = calculateParameter(alcohol.crazy, alcoholAmount ,softDrink.crazy, softDrinkAmount, syrup.crazy);
    const fanciness = calculateFanciness(alcohol.fancy ,softDrink.fancy, syrup.fancy, decorations.length);
    return {
        power: power,
        sweet: sweetness,
        crazy: craziness,
        fancy: fanciness
    }
}

//TODO recalculate all stats, ideally dividable by 5

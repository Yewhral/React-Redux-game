export function calculateParameter (alcohol, alcoholAmount, softDrink, softDrinkAmount, syrup) {
    return alcohol * alcoholAmount / 100 + softDrink * softDrinkAmount / 100 + syrup
}

export function calculateAllParameters(alcohol, alcoholAmount, softDrink, softDrinkAmount, syrup, decorations) {
    const power = calculateParameter(alcohol.power, alcoholAmount, softDrink.power, softDrinkAmount, syrup.power);
    const sweetness = calculateParameter(alcohol.sweet, alcoholAmount, softDrink.sweet, softDrinkAmount, syrup.sweet);
    const craziness = calculateParameter(alcohol.crazy, alcoholAmount ,softDrink.crazy, softDrinkAmount, syrup.crazy);
    const fanciness = decorations.length;
    return {
        power: power,
        sweet: sweetness,
        crazy: craziness,
        fancy: fanciness
    }
}

//TODO recalculate all stats, ideally dividable by 5
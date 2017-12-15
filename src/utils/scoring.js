function calculateParameter (alcohol, softDrink, syrup, alcoholAmount, softDrinkAmount) {
    return alcohol * alcoholAmount / 100 + softDrink * softDrinkAmount / 100 + syrup ;
}

export function calculateAllParameters(alcohol, softDrink, syrup, alcoholAmount, softDrinkAmount,  decorations) {
    const power = calculateParameter(alcohol.power, softDrink.power, syrup.power, alcoholAmount, softDrinkAmount);
    const sweetness = calculateParameter(alcohol.sweet, softDrink.sweet, syrup.sweet, alcoholAmount, softDrinkAmount);
    const craziness = calculateParameter(alcohol.crazy, softDrink.crazy, syrup.crazy, alcoholAmount, softDrinkAmount);
    const fanciness = decorations.length;
    return {
        power: power,
        sweet: sweetness,
        crazy: craziness,
        fancy: fanciness
    }
}

//TODO recalculate all stats, ideally dividable by 5
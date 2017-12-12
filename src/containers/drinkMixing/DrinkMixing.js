import React from 'react';
import Drinks from '../../components/drinks/Drinks';
import SyrupSelection from '../../components/syrupSelection/SyrupSelection';
import Proportions from '../../components/proportions/Proportions';
import Decorations from '../../components/decorations/Decorations';
import Preview from '../../components/preview/Preview';
import alcohol from '../../data/alcohol';
import softDrinks from '../../data/softDrinks';
import syrups from '../../data/syrups';
import './drinkMixing.css'

class DrinkMixing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAlcohol: '',
            selectedDrink: '',
            alcoholAmount: 50,
            softAmount: 50,
            selectedSyrup: '',
            canProceed: {
                alcohol: false,
                softDrink: false,
                syrup: false,
            },
            decorations: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ],
            canBack: false,
            currentStep: 0,
        }
    }

    handleProportions = (type) => {
        const {alcoholAmount, softAmount} = this.state;
        const amount = 10;
        if (type === 'alcohol' && alcoholAmount < 90) {
          const increasedAmount = alcoholAmount + amount;
          const decreasedAmount = softAmount - amount;
          this.setState({
              alcoholAmount: increasedAmount,
              softAmount: decreasedAmount,
          })
        } else if (type === 'soft' && softAmount < 90 ) {
            const increasedAmount = softAmount + amount;
            const decreasedAmount = alcoholAmount - amount;
            this.setState({
                alcoholAmount: decreasedAmount,
                softAmount: increasedAmount,
            })
        }
    };

    handleStep = (value) => {
        const {currentStep} = this.state;
        const newStep = currentStep + value;
        this.setState({
            currentStep: newStep,
        });
    };

    handleAlcohol = (alcohol) => {
        const { selectedAlcohol } = this.state;
        if(alcohol !== selectedAlcohol) {
            this.setState(prevState => ({
                selectedAlcohol: alcohol,
                canProceed: {
                    ...prevState.canProceed,
                    alcohol: true
                },
            }));
        } else {
            this.setState(prevState => ({
                selectedAlcohol: '',
                canProceed: {
                    ...prevState.canProceed,
                    alcohol: false
                },
            }));
        }
    };

    handleDrink = (drink) => {
        const { selectedDrink } = this.state;
        if(drink !== selectedDrink) {
            this.setState(prevState => ({
                selectedDrink: drink,
                canProceed: {
                    ...prevState.canProceed,
                    softDrink: true
                },
            }));
        } else {
            this.setState(prevState => ({
                selectedDrink: '',
                canProceed: {
                    ...prevState.canProceed,
                    softDrink: false
                },
            }));
        }
    };

    handleSyrup = (syrup) => {
        const { selectedSyrup } = this.state;
        if(syrup !== selectedSyrup) {
            this.setState(prevState => ({
                selectedSyrup: syrup,
                canProceed: {
                    ...prevState.canProceed,
                    syrup: true
                },
            }));
        } else {
            this.setState(prevState => ({
                selectedSyrup: '',
                canProceed: {
                    ...prevState.canProceed,
                    syrup: false
                },
            }));
        }
    };

    toggleCheckbox = (index) => {
        const { decorations } = this.state;
        this.setState(prevState => ({
            decorations: {
                ...prevState.decorations,
                [index]: !decorations[index]
            },
        }));
    };

    renderedDecorations = (decorations, visibleDecors) => {
        /*
        for (let i = 0; i < decorations.length; i++){
            if (visibleDecors[i]) {
                console.log(decorations[i]);
            }
        }
        */
    };

    selectStep = (step) => {
        const { canProceed, selectedAlcohol, selectedDrink, selectedSyrup, alcoholAmount, softAmount, decorations } = this.state;
        const decors = ["olive", "straw", "palm", "lemon", "mint", "flame", "cherry", "??"];
        switch (step) {
            case 0:
                return (
                    <Drinks
                        onClick={this.handleAlcohol}
                        drink={alcohol}
                        title="Pick an alcohol"
                        canProceed={canProceed.alcohol}
                        canBack={false}
                        selected={selectedAlcohol.name}
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 1:
                return (
                    <Drinks
                        onClick={this.handleDrink}
                        drink={softDrinks}
                        title="What to mix it with?"
                        canProceed={canProceed.softDrink}
                        canBack={true}
                        selected={selectedDrink.name}
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 2:
                return (
                    <Proportions
                        alcohol={selectedAlcohol.name}
                        alcoholAmount={alcoholAmount}
                        soft={selectedDrink.name}
                        softAmount={softAmount}
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                        alcoholIncrease={() => this.handleProportions("alcohol")}
                        softIncrease={() => this.handleProportions("soft")}
                    />
                );
            case 3:
                return (
                    <SyrupSelection
                        title="Add Syrup"
                        onClick={this.handleSyrup}
                        syrups={syrups}
                        canProceed={canProceed.syrup}
                        canBack={true}
                        selected={selectedSyrup.name}
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 4:
                return (
                    <Decorations
                        title="Finishing touch!"
                        canProceed={true}
                        canBack={true}
                        onClick={this.toggleCheckbox}
                        decors={decors}
                        decorationsCheck={decorations}
                        nextOnClick={() => { this.handleStep(1); this.renderedDecorations(decors, decorations) }}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 5:
                return (
                    <Preview
                        title="Summary"
                        syrupColor={selectedSyrup.color}
                        alcoholAmount={alcoholAmount}
                        alcoholColor={selectedAlcohol.color}
                        softAmount={softAmount}
                        softColor={selectedDrink.color}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            default:
                break;
        }
    };

    render() {
        const {currentStep} = this.state;
        const chosenStep = this.selectStep(currentStep);
        return (
            <div className="barWrapper">
                <div className="barContainer">
                    {chosenStep}
                </div>
            </div>
        );
    }
}

export default DrinkMixing;
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
            canProceed: false,
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
            this.setState({
                selectedAlcohol: alcohol,
                canProceed: true,
            });
        } else {
            this.setState({
                selectedAlcohol: '',
                canProceed: false,
            });
        }
    };

    handleDrink = (drink) => {
        const { selectedDrink } = this.state;
        if(drink !== selectedDrink) {
            this.setState({
                selectedDrink: drink,
                canProceed: true,
            });
        } else {
            this.setState({
                selectedDrink: '',
                canProceed: false,
            });
        }
    };

    handleSyrup = (syrup) => {
        const { selectedSyrup } = this.state;
        if(syrup !== selectedSyrup) {
            this.setState({
                selectedSyrup: syrup,
                canProceed: true,
            });
        } else {
            this.setState({
                selectedSyrup: ''
            });
        }
    };

    selectStep = (step) => {
        const {canProceed, selectedAlcohol, selectedDrink, selectedSyrup, alcoholAmount, softAmount} = this.state;
        switch (step) {
            case 0:
                return (
                    <Drinks
                        onClick={this.handleAlcohol}
                        drink={alcohol}
                        title="Pick an alcohol"
                        canProceed={canProceed}
                        canBack={false}
                        selected={selectedAlcohol}
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
                        canProceed={canProceed}
                        canBack={true}
                        selected={selectedDrink}
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 2:
                return (
                    <Proportions
                        alcohol={selectedAlcohol}
                        alcoholAmount={alcoholAmount}
                        soft={selectedDrink}
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
                        canProceed={canProceed}
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
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 5:
                return (
                    <Preview
                        title="Summary"
                        syrupColor={selectedSyrup.color}
                        alcoholAmount={alcoholAmount}
                        softAmount={softAmount}
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
            <div className="bar-container">
                {chosenStep}
            </div>
        );
    }
}

export default DrinkMixing;
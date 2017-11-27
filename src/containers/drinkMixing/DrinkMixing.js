import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import Drinks from '../../components/drinks/Drinks';
import SyrupSelection from '../../components/syrupSelection/SyrupSelection';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import Proportions from '../../components/proportions/Proportions';
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

    handleSyrup = (selectedSyrup) => {
        const { canProceed } = this.state;
        this.setState({
            canProceed: !canProceed
        });
        if(selectedSyrup !== this.state.selectedSyrup) {
            this.setState({
                selectedSyrup: selectedSyrup
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
                        buttonText="next"
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
                        buttonText="next"
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 2:
                return (
                    <Proportions
                        alcohol={'beer'}
                        alcoholAmount={alcoholAmount}
                        soft={'energy drink'}
                        softAmount={softAmount}
                        buttonText="next"
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
                        selected={selectedSyrup}
                        buttonText="back"
                        nextOnClick={() => this.handleStep(1)}
                        backOnClick={() => this.handleStep(-1)}
                    />
                );
            case 4:
                return (
                    <div>
                        <ScreenTitle title="Finishing touch!" />
                        <NavigationLink
                            linkText = 'Serve your drink!'
                            destination = ''
                        />
                        <NavigationLink
                            linkText = 'Back to menu'
                            destination = ''
                        />
                    </div>
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
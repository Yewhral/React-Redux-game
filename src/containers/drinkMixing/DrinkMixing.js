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
            alcoholAmount: '',
            selectedSyrup: '',
            canProceed: false,
            canBack: false,
        }
    }

    handleAlcohol = (selectedAlcohol) => {
        const canProceed = this.state.canProceed;
        this.setState({
            canProceed: !canProceed
        });
        if(selectedAlcohol !== this.state.selectedAlcohol) {
            this.setState({
                selectedAlcohol: selectedAlcohol
            });
        } else {
            this.setState({
                selectedAlcohol: ''
            });
        }
    };

    handleDrink = (selectedDrink) => {
        const canBack = this.state.canBack;
        this.setState({
            canBack: !canBack
        });
        if(selectedDrink !== this.state.selectedDrink) {
            this.setState({
                selectedDrink: selectedDrink
            });
        } else {
            this.setState({
                selectedDrink: ''
            });
        }
    };

    handleProportions = () => {
        console.log('asd');
    };

    handleSyrup = (selectedSyrup) => {
        const canProceed = this.state.canProceed;
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

    render() {
        const {canProceed, canBack, selectedAlcohol, selectedDrink, selectedSyrup} = this.state;
        return (
            <div className="bar-container">
                <Drinks
                    onClick={this.handleAlcohol}
                    drink={alcohol}
                    title="Pick an alcohol"
                    canProceed={canProceed}
                    canBack={canBack}
                    selected={selectedAlcohol}
                    buttonText="next"
                />
                <Drinks
                    onClick={this.handleDrink}
                    drink={softDrinks}
                    title="What to mix it with?"
                    canProceed={canProceed}
                    canBack={canBack}
                    selected={selectedDrink}
                    buttonText="next"
                />
                <Proportions
                    onClick={this.handleProportions}
                    alcohol={'beer'}
                    soft={'energy drink'}
                    buttonText="next"
                />
                <SyrupSelection
                    title="Add Syrup"
                    onClick={this.handleSyrup}
                    syrups={syrups}
                    canProceed={canProceed}
                    canBack={canBack}
                    selected={selectedSyrup}
                    buttonText="back"
                />
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
    }
}

export default DrinkMixing;
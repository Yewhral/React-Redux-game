import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import Drinks from '../../components/drinks/Drinks';
import SyrupSelection from '../../components/syrupSelection/SyrupSelection';
import NavigationLink from '../../components/navigationLink/NavigationLink';
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
            canBack: !canBack,
            selectedDrink: selectedDrink
        });
    };

    handleSyrup = (selectedSyrup) => {
        const canBack = this.state.canBack;
        this.setState({
            canBack: !canBack,
            selectedSyrup: selectedSyrup
        });
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
                    buttonText="back"
                />
                <ScreenTitle title="Select proportions" />
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
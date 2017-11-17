import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import Drinks from '../../components/drinks/Drinks';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import alcohol from '../../data/alcohol';
import softDrinks from '../../data/softDrinks';
import './drinkMixing.css'

class DrinkMixing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAlcohol: '',
            selectedDrink: '',
            canProceed: false,
        }
    }

    handleAlcohol = (alcohol) => {
        this.setState({
            selectedAlcohol: alcohol,
            canProceed: true
        });
    };

    handleDrink = (drink) => {
        this.setState({
            selectedDrink: drink,
            canProceed: true
        });
    };

    render() {
        const {canProceed, selectedDrink, selectedAlcohol} = this.state;
        return (
            <div className="bar-container">
                <ScreenTitle title="Pick an alcohol" />
                <Drinks
                    onClick={this.handleAlcohol}
                    drink={alcohol}
                />
                {
                    canProceed &&
                    <NavigationLink
                        linkText = {selectedAlcohol}
                        destination = ''
                    />
                }
                <ScreenTitle title="What to mix it with?" />
                <Drinks
                    onClick={this.handleDrink}
                    drink={softDrinks}
                />
                {
                    canProceed &&
                    <NavigationLink
                        linkText = {selectedDrink}
                        destination = ''
                    />
                }
                <ScreenTitle title="Select proportions" />
                <ScreenTitle title="Add syrup" />
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
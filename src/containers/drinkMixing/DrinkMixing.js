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
        this.state = {}
    }

    handleAlcohol = (i) => {
        alert(i)
    };

    render() {
        return (
            <div className="bar-container">
                <ScreenTitle title="Pick an alcohol" />
                <Drinks
                    onClick={this.handleAlcohol}
                    drink={alcohol}
                />
                <ScreenTitle title="What to mix it with?" />
                <Drinks
                    onClick={this.handleAlcohol}
                    drink={softDrinks}
                />
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
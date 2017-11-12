import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import Alcohol from '../../components/alcohol/Alcohol';
import NavigationLink from '../../components/navigationLink/NavigationLink';
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
                <Alcohol
                    onClick={this.handleAlcohol}
                />
                <ScreenTitle title="What to mix it with?" />
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
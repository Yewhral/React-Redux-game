import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import './drinkMixing.css'

class DrinkMixing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="bar-container">
                <ScreenTitle title="Pick an alcohol" />
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
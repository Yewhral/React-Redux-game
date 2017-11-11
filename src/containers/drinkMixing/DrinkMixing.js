import React from 'react';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import NavigationLink from '../../components/navigationLink/NavigationLink';

import './drinkMixing.css'

class DrinkMixing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    guestSelection = (guest) => {
        this.props.setGuest(guest.name);
        this.props.setStrength(guest.strong);
        this.props.setSweetness(guest.sweet);
        this.props.setCraziness(guest.crazy);
        this.props.setFanciness(guest.fancy);
    };

    render() {
        return (
            <div>
                <ScreenTitle
                    title="Pick an alcohol"
                />
                <ScreenTitle
                    title="What to mix it with?"
                />
                <ScreenTitle
                    title="Select proportions"
                />
                <ScreenTitle
                    title="Add syrup"
                />
                <ScreenTitle
                    title="Finishing touch!"
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
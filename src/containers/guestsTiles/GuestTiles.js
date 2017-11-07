import React from 'react';
import { connect } from 'react-redux';
import GuestTile from '../../components/guestTile/GuestTile';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import { setGuest } from '../../redux/actions';
import asianSmall from '../../images/asianSmall.jpg';
import './guestTiles.css'

class GuestTiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    guestSelection = (guest) => {
        this.props.setGuest(guest);
    };

    render() {
        return (
            <div className="grid-positioning">
                <ScreenTitle
                    title="Who will be your guest?"
                />
                <div className="guests-container">
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Ariel"
                        onClick={() => {this.guestSelection('Ariel')}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Clark"
                        onClick={() => {this.guestSelection('Clark')}}
                    />
                    <GuestTile
                     guestPhoto={asianSmall}
                     guestName="Simon"
                     onClick={() => {this.guestSelection('Simon')}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Lucy"
                        onClick={() => {this.guestSelection('Lucy')}}
                    />
                </div>
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setGuest: (guest) => dispatch(setGuest(guest))
});

export default connect(null, mapDispatchToProps)(GuestTiles);
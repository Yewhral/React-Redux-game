import React from 'react';
import { connect } from 'react-redux';
import NavigationLink from '../../components/navigationLink/navigationLink';
import ScreenTitle from '../../components/screenTitle/screenTitle';
import GuestTile from '../../components/guestTile/guestTile';
import asianSmall from '../../images/asianSmall.jpg';
import { setGuest } from '../../redux/actions';
import './guestInfo.css'

class GuestInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="guestDetails">
                <ScreenTitle
                    title="Who will be your guest?"
                />
                <GuestTile
                    guestPhoto={asianSmall}
                    guestName={this.props.guest}
                />
                <NavigationLink
                    linkText = 'Choose this guest'
                    destination = 'pubmaster'
                />
                <NavigationLink
                    linkText = 'Go back'
                    destination = 'guests'
                />
                <button
                    onClick={() => this.props.setGuest('ssss')}>
                    OlololOLO
                </button>
                <button
                    onClick={() => this.props.setGuest('sssddds')}>
                    OloldddolOLO
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const guest = state.guest;
    return {
        guest
    }
};

const mapDispatchToProps = dispatch => ({
    setGuest: (guest) => dispatch(setGuest(guest))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestInfo);
import React from 'react';
import { connect } from 'react-redux';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import NavigationButton from '../../components/navigationButton/NavigationButton';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import GuestPic from '../../components/guestPic/GuestPic';
import GuestStats from '../../components/guestStats/GuestStats';
import { setGuestStep } from '../../redux/actions';
import './guestInfo.css'

class GuestInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: null,
            strong: null,
            sweet: null,
            crazy: null,
            fancy: null,
            photo: null
        };
    }

    render() {
        const {strong, sweet, crazy, fancy, photo, guest, setGuestStep} = this.props;
        return (
            <div className="guestDetails">
                <ScreenTitle
                    title="Who will be your guest?"
                />
                <GuestPic
                    guestPhoto={photo}
                    guestName={guest}
                />
                <GuestStats
                    strong={strong}
                    sweet={sweet}
                    crazy={crazy}
                    fancy={fancy}
                />
                <NavigationLink
                    linkText = 'Choose this guest'
                    destination = 'pubmaster'
                />
                <NavigationButton
                    buttonText = 'Go back'
                    onClick={() => { setGuestStep(0); }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        guest,
        guest_step,
        strong,
        sweet,
        crazy,
        fancy,
        photo
    } = state;
    return {
        guest,
        guest_step,
        strong,
        sweet,
        crazy,
        fancy,
        photo
    }
};


const mapDispatchToProps = dispatch => ({
    setGuestStep: (step) => dispatch(setGuestStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestInfo);
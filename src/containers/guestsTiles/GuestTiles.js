import React from 'react';
import { connect } from 'react-redux';
import GuestTile from '../../components/guestTile/GuestTile';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import { setGuest, setStrength, setSweetness, setCraziness, setFanciness, setPhoto, setGuestStep } from '../../redux/actions';
import {setScrollOnTop} from '../../utils/utils';
import guest from '../../data/guests';
import asianSmall from '../../images/asianSmall.jpg';
import './guestTiles.css'

class GuestTiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUpdate() {
        setScrollOnTop();
    }

    guestSelection = (guest) => {
        this.props.setGuest(guest.name);
        this.props.setStrength(guest.strong);
        this.props.setSweetness(guest.sweet);
        this.props.setCraziness(guest.crazy);
        this.props.setFanciness(guest.fancy);
        this.props.setPhoto(guest.photo);
        this.props.setGuestStep(1);
    };

    render() {
        return (
            <div className="grid-positioning">
                <ScreenTitle title="Who will be your guest?" />
                <div className="guests-container">
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Ariel"
                        onClick={() => {this.guestSelection(guest.Ariel)}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Clark"
                        onClick={() => {this.guestSelection(guest.Clark)}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Simon"
                        onClick={() => {this.guestSelection(guest.Simon)}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Lucy"
                        onClick={() => {this.guestSelection(guest.Lucy)}}
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
    setGuest: (guest) => dispatch(setGuest(guest)),
    setGuestStep: (step) => dispatch(setGuestStep(step)),
    setStrength: (strength) => dispatch(setStrength(strength)),
    setSweetness: (sweet) => dispatch(setSweetness(sweet)),
    setCraziness: (crazy) => dispatch(setCraziness(crazy)),
    setFanciness: (fancy) => dispatch(setFanciness(fancy)),
    setPhoto: (photo) => dispatch(setPhoto(photo)),
});

export default connect(null, mapDispatchToProps)(GuestTiles);
import React from 'react';
import { connect } from 'react-redux';
import GuestTile from '../../components/guestTile/GuestTile';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import { setGuest, setStrength, setSweetness, setCraziness, setFanciness, setPhoto, setGuestStep } from '../../redux/actions';
import {setScrollOnTop} from '../../utils/utils';
import guest from '../../data/guests';
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
        const {setGuest, setStrength, setSweetness, setCraziness, setFanciness, setPhoto, setGuestStep} = this.props;
        setGuest(guest.name);
        setStrength(guest.strong);
        setSweetness(guest.sweet);
        setCraziness(guest.crazy);
        setFanciness(guest.fancy);
        setPhoto(guest.photo);
        setGuestStep(1);
    };

    render() {
        return (
            <div className="guestWrapper">
                <div className="grid-positioning">
                    <ScreenTitle title="Who will be your guest?" />
                    <div className="guests-container">
                        <GuestTile
                            guestPhoto={guest.Lucy.photo}
                            guestName="Lucy"
                            onClick={() => {this.guestSelection(guest.Lucy)}}
                        />
                        <GuestTile
                            guestPhoto={guest.Clark.photo}
                            guestName="Clark"
                            onClick={() => {this.guestSelection(guest.Clark)}}
                        />
                        <GuestTile
                            guestPhoto={guest.Simon.photo}
                            guestName="Simon"
                            onClick={() => {this.guestSelection(guest.Simon)}}
                        />
                        <GuestTile
                            guestPhoto={guest.Ariel.photo}
                            guestName="Ariel"
                            onClick={() => {this.guestSelection(guest.Ariel)}}
                        />
                    </div>
                    <NavigationLink
                        linkText = 'Back to menu'
                        destination = ''
                    />
                </div>
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
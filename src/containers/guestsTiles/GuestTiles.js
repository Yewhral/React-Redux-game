import React from 'react';
import { connect } from 'react-redux';
import GuestTile from '../../components/guestTile/GuestTile';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import { setGuest, setStrength, setSweetness, setCraziness, setFanciness } from '../../redux/actions';
import asianSmall from '../../images/asianSmall.jpg';
import './guestTiles.css'

class GuestTiles extends React.Component {
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

    guest = {
        Ariel: {
            name: "Ariel",
            strong: 1,
            sweet: 2,
            crazy: 3,
            fancy: 4
        },
        Clark: {
            name: "Clark",
            strong: 4,
            sweet: 3,
            crazy: 2,
            fancy: 1
        },
        Simon: {
            name: "Simon",
            strong: 1,
            sweet: 2,
            crazy: 2,
            fancy: 1
        },
        Lucy: {
            name: "Lucy",
            strong: 3,
            sweet: 3,
            crazy: 3,
            fancy: 3
        }
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
                        onClick={() => {this.guestSelection(this.guest.Ariel)}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Clark"
                        onClick={() => {this.guestSelection(this.guest.Clark)}}
                    />
                    <GuestTile
                     guestPhoto={asianSmall}
                     guestName="Simon"
                     onClick={() => {this.guestSelection(this.guest.Simon)}}
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Lucy"
                        onClick={() => {this.guestSelection(this.guest.Lucy)}}
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
    setStrength: (strength) => dispatch(setStrength(strength)),
    setSweetness: (sweet) => dispatch(setSweetness(sweet)),
    setCraziness: (crazy) => dispatch(setCraziness(crazy)),
    setFanciness: (fancy) => dispatch(setFanciness(fancy)),
});

export default connect(null, mapDispatchToProps)(GuestTiles);
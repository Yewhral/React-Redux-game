import React from 'react';
import { connect } from 'react-redux';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import GuestPic from '../../components/guestPic/GuestPic';
import './scoreScreen.css'

class ScoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {strong, sweet, crazy, fancy, photo, guest, drinkPower, drinkSweet, drinkCrazy, drinkFancy} = this.props;
        return (
            <div className="guestWrapper">
                <div className="guestDetails">
                    <ScreenTitle
                        title="Results!"
                    />
                    <GuestPic
                        guestPhoto={photo}
                        guestName={guest}
                    />

                    <p>Power: {drinkPower} was meant to be {strong}</p>
                    <p>Sweet: {drinkSweet} vs {sweet}</p>
                    <p>Crazy: {drinkCrazy} vs {crazy}</p>
                    <p>Fancy: {drinkFancy} vs {fancy}</p>
                    <p>This will show results</p>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        guest,
        strong,
        sweet,
        crazy,
        fancy,
        photo
    } = state;
    return {
        guest,
        strong,
        sweet,
        crazy,
        fancy,
        photo
    }
};

export default connect(mapStateToProps, null)(ScoreScreen);

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

    returnComment(guest, goal, score) {
        return `${guest} wanted ${goal} and got ${score}`
    }

    render() {
        const {strong, sweet, crazy, fancy, photo, guest, drinkPower, drinkSweet, drinkCrazy, drinkFancy} = this.props;
        const strongComment = this.returnComment(guest, strong, drinkPower);
        const sweetComment = this.returnComment(guest, sweet, drinkSweet);
        const crazyComment = this.returnComment(guest, crazy, drinkCrazy);
        const fancyComment = this.returnComment(guest, fancy, drinkFancy);
        const commentInfo = `${guest} commented your drink: `;
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

                    <p>{commentInfo}</p>
                    <p>{strongComment}</p>
                    <p>{sweetComment}</p>
                    <p>{crazyComment}</p>
                    <p>{fancyComment}</p>

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

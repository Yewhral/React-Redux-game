import React from 'react';
import { connect } from 'react-redux';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import GuestPic from '../../components/guestPic/GuestPic';
import comments from '../../data/comments';
import './scoreScreen.css'

class ScoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    returnComment(guest, parameter, goal, score) {
        const scoreDifference = score - goal;
        const param = comments[guest][parameter];
        if (scoreDifference === 0){
            return param.perfect;
        } else if (scoreDifference === 1) {
            return param.redundant;
        } else if (scoreDifference === -1) {
            return param.insufficient;
        } else if (scoreDifference >= 2) {
            return param.excessive;
        } else if (scoreDifference <= -2) {
            return param.deficient;
        }
    }

    render() {
        const {strong, sweet, crazy, fancy, photo, guest, drinkPower, drinkSweet, drinkCrazy, drinkFancy} = this.props;
        const strongComment = this.returnComment(guest, 'strong', strong, drinkPower);
        const sweetComment = this.returnComment(guest, 'sweet', sweet, drinkSweet);
        const crazyComment = this.returnComment(guest, 'crazy', crazy, drinkCrazy);
        const fancyComment = this.returnComment(guest, 'fancy', fancy, drinkFancy);
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

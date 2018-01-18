import React from 'react';
import { connect } from 'react-redux';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import GuestPic from '../../components/guestPic/GuestPic';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import comments from '../../data/comments';
import './scoreScreen.css'

class ScoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    calculateComment = (guest, parameter, goal, score) => {
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
    };

    comment() { // TODO refactor this
        const {strong, sweet, crazy, fancy, guest, drinkPower, drinkSweet, drinkCrazy, drinkFancy} = this.props;
        const strongComment = this.calculateComment(guest, 'strong', strong, drinkPower);
        const sweetComment = this.calculateComment(guest, 'sweet', sweet, drinkSweet);
        const crazyComment = this.calculateComment(guest, 'crazy', crazy, drinkCrazy);
        const fancyComment = this.calculateComment(guest, 'fancy', fancy, drinkFancy);
        return strongComment + sweetComment + crazyComment + fancyComment;
    }

    render() {
        const {photo, guest} = this.props;
        const commentInfo = `${guest} commented your drink: `;
        const commentary = this.comment();
        return (
            <div className="guestWrapper">
                <div className="leftDecor"></div>
                <div className="guestDetails">
                    <ScreenTitle
                        title="Results!"
                    />
                    <GuestPic
                        guestPhoto={photo}
                        guestName={guest}
                    />
                    <div className="commentary">
                        <p>{commentInfo}</p>
                        <p className="comments">{commentary}</p>
                    </div>
                    <NavigationLink
                        linkText = 'Back to menu'
                        destination = ''
                    />
                </div>
                <div className="rightDecor"></div>
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

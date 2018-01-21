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
        this.state = {
            strongScore: '',
            sweetScore: '',
            crazyScore: '',
            fancyScore: '',
        };
    }

    componentWillMount() { // TODO refactor this
        const {strong, sweet, crazy, fancy, drinkPower, drinkSweet, drinkCrazy, drinkFancy} = this.props;
        this.setState({
            strongScore: this.calculateStat(drinkPower, strong),
            sweetScore: this.calculateStat(drinkSweet, sweet),
            crazyScore: this.calculateStat(drinkCrazy, crazy),
            fancyScore: this.calculateStat(drinkFancy, fancy),
        });
    };

    calculateStat = (score, goal) => {
        return score - goal;
    };

    calculateComment = (parameter, scoreDifference) => {
        const { guest } = this.props;
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
        const {strongScore, sweetScore, crazyScore, fancyScore} = this.state;
        const strongComment = this.calculateComment('strong', strongScore);
        const sweetComment = this.calculateComment('sweet', sweetScore);
        const crazyComment = this.calculateComment('crazy', crazyScore);
        const fancyComment = this.calculateComment('fancy', fancyScore);
        return strongComment + sweetComment + crazyComment + fancyComment;
    }

    render() {
        const {photo, guest} = this.props;
        const commentInfo = `${guest} commented your drink: `;
        const commentary = this.comment();
        return (
            <div className="guestWrapper">
                <div className="leftDecor"></div>
                <main className="guestDetails">
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
                </main>
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

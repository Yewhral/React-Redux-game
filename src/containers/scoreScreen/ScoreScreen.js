import React from 'react';
import { connect } from 'react-redux';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import GuestPic from '../../components/guestPic/GuestPic';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import comments from '../../data/comments';
import './scoreScreen.css'

// TODO refactor this whole container as it's full of repeating code

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

    componentWillMount() {
        const {strong, sweet, crazy, fancy, drinkPower, drinkSweet, drinkCrazy, drinkFancy} = this.props;
        this.setState({
            strongScore: drinkPower - strong,
            sweetScore: drinkSweet - sweet,
            fancyScore: drinkFancy - fancy,
            crazyScore: drinkCrazy - crazy,
        });
    };

    calculateComment = (parameter, scoreDifference) => {
        const { guest } = this.props;
        const param = comments[guest][parameter];
        if (scoreDifference === 0) {
            return param.perfect;
        } else if (scoreDifference === 1) {
            return param.redundant;
        } else if (scoreDifference === -1) {
            return param.insufficient;
        } else if (scoreDifference >= 2) {
            return param.excessive;
        } else {
            return param.deficient;
        }
    };

    calculateDifference = (scoreDifference) => {
        switch (true) {
            case (scoreDifference === 0):
                return "perfect!";
            case (scoreDifference === 1):
                return "too much";
            case (scoreDifference >= 2):
                return "way too much";
            case (scoreDifference === -1):
                return "too little";
            case (scoreDifference <= -2):
                return 'way too little';
            default:
                break;
        }
    };

    comment() {
        const {strongScore, sweetScore, crazyScore, fancyScore} = this.state;
        const strongComment = this.calculateComment('strong', strongScore);
        const sweetComment = this.calculateComment('sweet', sweetScore);
        const crazyComment = this.calculateComment('crazy', crazyScore);
        const fancyComment = this.calculateComment('fancy', fancyScore);
        return strongComment + sweetComment + crazyComment + fancyComment;
    }

    render() {
        const {photo, guest} = this.props;
        const {strongScore, sweetScore, fancyScore, crazyScore} = this.state;
        const commentInfo = `${guest} commented your drink: `;
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
                        <p className="comments">{this.comment()}</p>
                    </div>
                    <div className="commentary">
                        <p>Drink summary</p>
                        <p>Power: {this.calculateDifference(strongScore)}</p>
                        <p>Sweetness: {this.calculateDifference(sweetScore)}</p>
                        <p>Craziness: {this.calculateDifference(crazyScore)}</p>
                        <p>Fanciness: {this.calculateDifference(fancyScore)}</p>
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

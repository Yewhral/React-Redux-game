import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/banner/Banner';
import ScoreScreen from '../containers/scoreScreen/ScoreScreen';
import {setScrollOnTop} from '../utils/utils';

class Results extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        const {created_drink} = this.props;
        return (
            <div className="game-wrapper">
                <Banner/>
                <ScoreScreen
                    drinkPower={created_drink.power}
                    drinkSweet={created_drink.sweet}
                    drinkCrazy={created_drink.crazy}
                    drinkFancy={created_drink.fancy}
                />
            </div>
        );
    };
}

const mapStateToProps = state => {
    const {
        created_drink
    } = state;
    return {
        created_drink,
    }
};

export default connect(mapStateToProps, null)(Results);

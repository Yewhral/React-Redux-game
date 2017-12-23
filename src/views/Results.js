import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/banner/Banner';
import {setScrollOnTop} from '../utils/utils';

class Results extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="game-wrapper">
                <Banner/>
                {this.props.created_drink.power}
                {this.props.created_drink.fancy}
                {this.props.created_drink.sweet}
                {this.props.created_drink.crazy}
                This will show results
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

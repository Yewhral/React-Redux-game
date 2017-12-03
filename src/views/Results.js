import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/banner/Banner';
import { } from '../redux/actions';
import {setScrollOnTop} from '../utils/utils';

class Results extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="game-wrapper">
                <Banner/>
                This will show results
            </div>
        );
    };
}

const mapStateToProps = state => {
    const {

    } = state;
    return {

    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
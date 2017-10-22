import React from 'react';
import { connect } from 'react-redux';
import SimpleTest from '../containers/SimpleTest';
import {fetchNewTime} from '../redux/actions';

const Home = (props) => {
    return (
        <div className="home">
            <SimpleTest/>
            <p>Current time: {props.currentTime}</p>
            <button onClick={props.updateTime}>
                Update time
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentTime: state.currentTime
    }
};

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
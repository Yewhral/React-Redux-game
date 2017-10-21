import React from 'react';
import { connect } from 'react-redux';
import SimpleTest from '../containers/SimpleTest';

const Home = (props) => {
    return (
        <div className="home">
            <SimpleTest/>
            <p>Current time: {props.currentTime}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentTime: state.currentTime
    }
};
export default connect(
    mapStateToProps
)(Home);
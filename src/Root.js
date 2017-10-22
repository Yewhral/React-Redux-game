import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';


const Root = (props) => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
};

export default Root;

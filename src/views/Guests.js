import React from 'react';
import { connect } from 'react-redux';
import GuestTiles from '../containers/guestsTiles/GuestTiles';
import GuestInfo from '../containers/guestInfo/GuestInfo';
import Banner from '../components/banner/Banner';
import { setGuestStep } from '../redux/actions';
import { setScrollOnTop } from '../utils/utils';

class Guests extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    componentWillUnmount() {
        this.props.setGuestStep(0);
    }

    selectStep = (step) => {
        switch (step) {
            case 0:
                return <GuestTiles />;
            case 1:
                return <GuestInfo />;
            default:
                break;
        }
    };

    render() {
        let chosenStep;
        chosenStep = this.selectStep(this.props.guest_step);
        return (
            <div className="gameWrapper">
                <Banner/>
                {chosenStep}
            </div>
        );
    };
}

const mapStateToProps = state => {
    const {
        guest_step
    } = state;
    return {
        guest_step,
    }
};

const mapDispatchToProps = dispatch => ({
    setGuestStep: (step) => dispatch(setGuestStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(Guests);
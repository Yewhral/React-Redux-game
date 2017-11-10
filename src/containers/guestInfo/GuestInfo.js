import React from 'react';
import { connect } from 'react-redux';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import ScreenTitle from '../../components/screenTitle/ScreenTitle';
import GuestPic from '../../components/guestPic/guestPic';
import GuestStats from '../../components/guestStats/guestStats';
import asianSmall from '../../images/asianSmall.jpg';
import './guestInfo.css'

class GuestInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: null,
            strong: null,
            sweet: null,
            crazy: null,
            fancy: null
        };
    }

    render() {
        return (
            <div className="guestDetails">
                <ScreenTitle
                    title="Who will be your guest?"
                />
                <GuestPic
                    guestPhoto={asianSmall}
                    guestName={this.props.guest}
                />
                <GuestStats
                    strong={this.props.strong}
                    sweet={this.props.sweet}
                    crazy={this.props.crazy}
                    fancy={this.props.fancy}
                />
                <NavigationLink
                    linkText = 'Choose this guest'
                    destination = 'pubmaster'
                />
                <NavigationLink
                    linkText = 'Go back'
                    destination = 'guests'
                />
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
        fancy
    } = state;
    return {
        guest,
        strong,
        sweet,
        crazy,
        fancy
    }
};

export default connect(mapStateToProps, null)(GuestInfo);
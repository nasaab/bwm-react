import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class RentalDetail extends Component {

    componentWillMount() {
        // Dispatch Action

        const rentalId = this.props.match.params.id;
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental;
        if(rental.id) {
            return(
                <div>
                    <h1>Im rental detail component {rental.title}</h1>
                </div>
            );
        } else {
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } 
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)
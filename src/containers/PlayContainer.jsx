import React from 'react';
import { connect } from 'react-redux';
import { actionPlay } from '../actions';
import yarn from '../imgs/wool.png';

const Play = (props) => (
    <img src={yarn} onClick={props.handleClick} alt="cat toy"/>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionPlay())
        }
    };
};

export default connect(null, mapDispatchToProps)(Play);
import React from 'react';
import { connect } from 'react-redux';
import { actionNap } from '../actions';
import catNap from '../imgs/cat-nap.png';

const Nap = (props) => (
    <img src={catNap} onClick={props.handleClick} alt="sleeping cat"/>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionNap())
        }
    };
};

export default connect(null, mapDispatchToProps)(Nap);
import React from 'react';
import { connect } from 'react-redux';
import { actionEat } from '../actions';
import catFood from '../imgs/cat-food.png';

const Eat = (props) => (
    <img src={catFood} onClick={props.handleClick} alt="cat food"/>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionEat())
        }
    }
};

export default connect(null, mapDispatchToProps)(Eat)
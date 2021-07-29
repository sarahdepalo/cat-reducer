import React from 'react';
import { connect } from 'react-redux';
import { actionSetActivity } from '../actions';
import catFood from '../imgs/cat-food.png';
import catNap from '../imgs/cat-nap.png';
import yarn from '../imgs/wool.png';

const SetActivity = (props) => {

    const handleClick = (activity) => {
        props.handleClick(activity)
    }

    return (
        <>
            <img src={catFood} onClick={() => handleClick('eating')} alt="cat food" />

            <img src={catNap} onClick={() => handleClick('napping')} alt="sleeping cat" />

            <img src={yarn} onClick={() => handleClick('playing')} alt="cat toy" />
        </>

    );

};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (activity) => {
            console.log('Dispatch Activity: ', activity);
            dispatch(actionSetActivity(activity));
        }
    }
};

export default connect(null, mapDispatchToProps)(SetActivity);
import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { actionSetName } from '../actions';

const SetName = (props) => {

    const [input, setInput] = useState('');

    const handleChange = (event) => {
        console.log('Input is', input);
        setInput(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleClick(input);
        setInput('');  // event.target.reset() didn't work so set the value of the form to an empty string after we get the information we want. 
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder="Name Your Cat" onChange={handleChange} value={input} />
            <button type="submit">Submit</button>
        </form>
    )

};


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (input) => {
            console.log(input)
            dispatch(actionSetName(input))
        }
    }
};

export default connect(null, mapDispatchToProps)(SetName);
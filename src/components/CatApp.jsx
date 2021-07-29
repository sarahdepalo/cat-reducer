import React from 'react';
import Output from '../containers/OutputContainer';
import SetName from '../containers/SetName';
import SetActivity from '../containers/SetActivity';
import cat from '../imgs/cat.png';


const CatApp = (props) => (
    <div>
        <h1>Cat Simulator</h1>
        <SetName/>
        <img src={cat} alt="cute cat" className="cat"/>
        <Output />

        <div className="iconContainer">
            <SetActivity/>
        </div>
    </div>
);

export default CatApp;
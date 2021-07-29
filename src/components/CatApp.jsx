import React from 'react';
import Output from '../containers/OutputContainer';
import Eat from '../containers/EatContainer';
import Play from '../containers/PlayContainer';
import Nap from '../containers/NapContainer';
import cat from '../imgs/cat.png';

const CatApp = (props) => (
    <div>
        <h1>Cat Simulator</h1>
        <img src={cat} alt="cute cat" />
        <Output />
        <div className="iconContainer">
            <Eat />
            <Play />
            <Nap />
        </div>
    </div>
);

export default CatApp;
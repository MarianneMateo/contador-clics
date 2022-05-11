import React from 'react';
import '../style/counter.css';

const Counter = ({ numClicks }) => {
	return <div className="counter">{numClicks}</div>;
};

export default Counter;

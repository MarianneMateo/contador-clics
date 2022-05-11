import React from 'react';
import '../style/button.css';

const Button = ({ text, clickButton, handleClicks }) => {
	return (
		<button
			className={clickButton ? 'click-button' : 'restart-button'}
			onClick={handleClicks}
		>
			{text}
		</button>
	);
};

export default Button;

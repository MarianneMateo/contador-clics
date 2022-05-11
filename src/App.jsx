import { useState } from 'react';
import logo from './img/logo.png';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
	const [count, setCount] = useState(0);

	const increaseCounter = () => {
		setCount((e) => e + 1);
	};

	const resetCounter = () => {
		setCount(0);
	};

	return (
		<div className="App">
			<div className="logo-container">
				<img className="logo" src={logo} alt="logo" />
			</div>
			<div className="counter-container">
				<Counter numClicks={count} />
				<Button
					text="Click"
					clickButton={true}
					handleClicks={increaseCounter}
				/>
				<Button
					text="Restart"
					clickButton={false}
					handleClicks={resetCounter}
				/>
			</div>
		</div>
	);
}

export default App;

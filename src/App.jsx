import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const aumentar = () => {
		setCount((count) => count + 1);
	};

	const reiniciar = () => {
		setCount(0);
	};

	return (
		<div className="container">
			<div className="contador">{count}</div>
			<button onClick={aumentar}>Clic</button>
			<button onClick={reiniciar}>Reiniciar</button>
		</div>
	);
}

export default App;

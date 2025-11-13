import { useState } from 'react'
import './Counter.css'

function Counter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
	};

	function decrement() {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="counter">
			<div className="counter-value">{count}</div>
			<div className="counter-buttons">
				<button className="counter-button counter-button-increment" onClick={decrement}>-</button>
				<button className="counter-button counter-button-decrement" onClick={increment}>+</button>
			</div>
		</div>
	);
}

export default Counter;

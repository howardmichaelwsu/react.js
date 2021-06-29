ReactDOM.render(
	React.createElement('div', { style: { backgroundColor: 'pink' } }, 'green on pink'),
	document.getElementById('app1')
	);


ReactDOM.render(
React.createElement('div', { style: { backgroundColor: 'blue' } }, 'White on blue'),
document.getElementById('app')
);
ReactDOM.render(
React.createElement('div', { style: { backgroundColor: 'red' } }, 'blue on red'),
document.getElementById('app2')
);
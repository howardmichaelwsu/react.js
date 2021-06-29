	// to call a react.js const is the "function"
	// the type is button
	// the prop should be set to null as of now
	// children of the const is click me in this case
	const myButton = React.createElement('button', null, 'Click Me');
	console.log(JSON.stringify(myButton));
	/*
		Prints the following:
		{
		"type":"button",
		"key":null,
		"ref":null,
		"props": {
		"children":"Click Me!"
		},
		"_owner":null,
		"_store":{}
		}
	*/
	ReactDOM.render(myButton, document.getElementById('app'));
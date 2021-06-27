// function for updating the ticking clock
function update(){
	// to call const call element then creating element and needs to fill the three calls
	// 1) type, I made it to be an h1 element can be any html element
	// 2) props, still to be null for practice right now
	// 3) children, what the type will be on webpage as
	// ${new Date().toLocaleTimeString()} is to call a locale to use time
	const element = React.createElement("h1", null, `The Time is: ${new Date().toLocaleTimeString()}`);
	ReactDOM.render(element, document.getElementById("app"));
}
setInterval(func => { 
	1000,
	update()
});


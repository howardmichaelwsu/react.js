// to get hello dojo rendered still using just the app id in the div
const title = React.createElement("h1", null, "Hello Dojo!");
// a subtitle, that is why it is h3 and renders things I need to do
const message = React.createElement("h3", null, "Things I Need To Do:");
// the items of the list, not reating anything but an array of strings here
const items = ["Learn React", "Climb Mt. Rainier", "Run a Marathon", "Feed the dogs"];
// creating an unordered list and calling all items in the above const of items
const list = React.createElement("ul", null, items.map((item, index) => 
    React.createElement("li", {key: index}, `${item}`)
));
// calling all above const into one "function" where type is a div and the children are all the const above
const app = React.createElement("div", null, title, message, list);
// actually calling it into rendering by ReactDOM.render( app(the const from above), document.getElementById("app(from hello.html"))
ReactDOM.render(app, document.getElementById("app"));
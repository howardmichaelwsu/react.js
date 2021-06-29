// gets objects of array for style
function SetStyles(stl, styleObj){
    Object.keys(styleObj).map(key => stl.setAttribute(key, styleObj[key]));
}
// props is what is being set, rows is an empty set. the props is giving a simple for loop to set up the checker board
function CheckerBoard (props) {
    let rows = []
    for(let i = 0; i < props.size; i++){
        rows.push(React.createElement(Row, {rows: props.size, key: i, even:(i%2===0)}));
    }
    return React.createElement("div", null, rows)
}
//sets up the row (actual cell color), cell is empty set, props.even gets even, then next line in for loop sets(assings: the Cell function does the actual prop setting) the colors to alt because black is equal to odd and red is equal to even
// creates the element and .push actually puts the color on
function Row (props) {
    let cells = [];
    let alt = props.even ? 0 : 1;
    for(let i = alt; i < props.rows + alt; i++){ 
        let cellType = (i%2===0) ? styles["black"] : styles["red"];
        let cell = React.createElement(Cell, {cellStyle: cellType, key:i});
        cells.push(cell);
    };
    let row = React.createElement("div", {style: styles["row"]}, cells);
    return row;
}
// the actual function to SET the background color
function Cell (props) {
    let styleProto = Object.create(styles["cell"]);
    let obj = {
        "backgroundColor": props.cellStyle["backgroundColor"]
    };
    // deperciated and is an old style. Had to use a hint for this part
    Object.assign(obj, styleProto.__proto__)
    return React.createElement("div", {style: obj}, "");
} 

// And feel free to use the following object: 
var styles = { 
    row: {height: '20px'}, 
    cell: {height: '20px', width: '20px', display:'inline-block'}, 
    black: {backgroundColor: 'black'}, 
    red: {backgroundColor: 'red'} 
} 

ReactDOM.render(React.createElement(CheckerBoard, {size:10}), document.getElementById("app"));

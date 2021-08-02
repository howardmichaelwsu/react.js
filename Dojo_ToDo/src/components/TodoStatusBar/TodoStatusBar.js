import React from 'react';
import './TodoStatusBar.css';

let options = ["all", "active", "completed"];
const selectOptions = (props) => {
    return options.map((option, idx) =>
        <p 
            key={idx}
            className={(props.filter === option) ? "selected": ""} 
            onClick={()=>props.onUpdateFilter(option)}>{option}</p>
        )
}
const TodoStatusBar = (props) => {
        return (
            <footer>
                <p>{props.remaining} {props.remaining>1||props.remaining===0 ? "Items": "Item"} Left</p>
                <div className="status-options">
                    {selectOptions(props)}
                </div>
                <p onClick={()=>props.onClearCompleted()}>Clear Completed</p>
            </footer>
        )
}

export default TodoStatusBar;

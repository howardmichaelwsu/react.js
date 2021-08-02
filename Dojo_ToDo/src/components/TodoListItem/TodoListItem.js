import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            focus: "UNSELECTED",
            status: "active"
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            status:nextProps.status,
            text:nextProps.text
        });
    }
    handleSubmit(event) {
        if(event.keyCode === 13) {
            this.props.onHandleSubmit(this.state.text, this.props.idx);
            this.setState({focus:"UNSELECTED"})
        }
    }
    handleFocus(event) {
       this.props.onHandleSubmit(this.state.text, this.props.idx);
       this.setState({focus:"UNSELECTED"})
    }
    moveCursor(event) {
        event.target.value = "";
        event.target.value = this.state.text;
    }
    updateStatus(event) {
        this.props.onUpdateStatus(this.props.idx, event.target.checked);
    }
    render() {
        let liContents = null;
        let checkbox = <input 
                            className="toggle" 
                            type="checkbox" 
                            checked={this.props.status==="completed"}
                            onChange={(event)=>this.updateStatus(event)} />;
        switch(this.state.focus) {
            case "UNSELECTED":
                liContents = (
                    <div className="view">
                        {checkbox}
                        <label onDoubleClick={(event)=>this.setState({focus:"SELECTED"})}>
                            {this.state.text}
                        </label>
                    </div>
                );
                break;
           default:
                liContents = (
                    <div>
                        {checkbox}
                        <input 
                            autoFocus
                            onFocus={(event)=>this.moveCursor(event)}
                            onBlur={(event)=>this.handleFocus(event)}
                            type="text" 
                            onKeyUp={(event)=>this.handleSubmit(event)}
                            onChange={event => 
                                    this.setState({text:event.target.value})}
                            value={this.state.text} />
                    </div>
                );
                break;
        }
        return (
            <li>
                {liContents} 
            </li>
        );
    }
}

export default TodoListItem;


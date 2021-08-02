import React, { Component } from 'react';

class NewTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    }
    onHandleSubmit(e) {
        if(e.keyCode === 13){
            this.props.onUpdateTodo(this.state.text);
            this.setState({text: ""});
        }
    }
    render() {
        return (
            <div className="new-todo">
                <input 
                    type="text" 
                    onKeyUp={event => this.onHandleSubmit(event)}
                    onChange={event => 
                            this.setState({text:event.target.value})}
                    value={this.state.text} />
            </div>
        );
    }
}

export default NewTodo;
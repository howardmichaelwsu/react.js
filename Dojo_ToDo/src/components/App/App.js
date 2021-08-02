import React, { Component } from 'react';
import './App.css';
import TodoStatusBar from '../TodoStatusBar/TodoStatusBar.js';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import NewTodo from '../NewTodo/NewTodo.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[],
            filter:"all"
        };
    }
    updateTodoList(text, idx=null) {
        let todos = [...this.state.todos];
        if(idx !== null) { 
            todos[idx].text = text;
        }
        else {
            todos.push({
                text: text,
                status: "active",
            });
        }
        this.setState({todos});
    }
    updateTodoStatus(idx, isChecked) {
        let todos = [...this.state.todos];
        todos[idx].status = isChecked===true ? "completed" : "active";
        this.setState({todos});
    }
    filter(todoStatus) {
        return this.state.filter === "all" ? todoStatus : this.state.filter;
    }
    clearCompleted() {
        console.log("clearing completed todos...");
        let todos = [...this.state.todos].filter(todo => todo.status!=="completed");
        this.setState({todos});
    }
    render() {
        const remaining = this.state.todos.filter(todo => todo.status==="active").length;
        const todolist = this.state.todos.filter(todo => todo.status===this.filter(todo.status)).map((todo, idx) => 
            (<TodoListItem 
                key={idx} 
                onHandleSubmit={(text, idx)=>this.updateTodoList(text, idx)}
                onUpdateStatus={(idx, isChecked)=>this.updateTodoStatus(idx, isChecked)}
                text={todo.text} 
                status={todo.status}
                idx={idx} />) 
        );
        return (
            <div>
                <NewTodo onUpdateTodo={(todoText) => this.updateTodoList(todoText)} />
                <section>
                    <ul>
                        {todolist}
                    </ul>
                </section>
                <TodoStatusBar 
                    onUpdateFilter={(filter)=>this.setState({filter})} 
                    remaining={remaining}
                    filter={this.state.filter}
                    onClearCompleted={()=>this.clearCompleted()} />
            </div>
        );
    }
}

export default App;


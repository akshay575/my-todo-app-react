import React, { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";
import AddTodo from "./AddTodo/AddTodo";
import './Todo.css';

interface state {
    day: string,
    todos: TodoI[]
};

interface TodoI {
    index: number, content: string, isDone: boolean
}

class Todo extends Component<{}, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            day: 'Today',
            todos: [
                {index: 0, content: 'This is my first task', isDone: false},
                {index: 1, content: 'Second task', isDone: false},
                {index: 2, content: 'Third task is completed!', isDone: true},
                {index: 3, content: 'Fourth task and so on...', isDone: false}
            ]
        }
    }
    handleAddTodo = (content: string) => {
        console.log(content);
        const newItem = {
            index: this.state.todos[this.state.todos.length-1].index + 1,
            content,
            isDone: false
        }
        this.setState({
            todos: [...this.state.todos, newItem]
        });
    }
    handleEditTodo = (index: number, content: string) => {
        const todos = this.state.todos;
        todos[index].content = content;
        this.setState({
            todos
        });
    }
    handleOnCheck = (index: number, isDone: boolean) => {
        const todos = this.state.todos;
        todos[index].isDone = isDone;
        this.setState({
            todos
        });
    }
    handleDelete = (index: number) => {
        const todos = this.state.todos.filter(e => e.index !== index);
        this.setState({
            todos
        });
    }
    renderTodoItems() {
        return this.state.todos.map((item, i) => {
            return <TodoItem {...item} key={i} onCheck={this.handleOnCheck} onEditTodo={this.handleEditTodo} onDeleteTodo={this.handleDelete} />
        })
    }
    render() {
        return (
            <div className="row todo">
                <div className="col-12">
                    <h4>{this.state.day}</h4><span>{new Date().toDateString()}</span>
                </div>
                <div className="col-12">
                    <AddTodo onAddTodo={this.handleAddTodo} onEditTodo={this.handleEditTodo} onCancelTodo={() => {}} onDeleteTodo={this.handleDelete} isEdit={false} content="" />
                </div>
                <div className="col-12">
                    {this.renderTodoItems()}
                </div>
            </div>
        );
    }
}

export default Todo;
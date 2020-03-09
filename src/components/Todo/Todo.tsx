import React, { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";
import AddTodo from "./AddTodo/AddTodo";
import './Todo.css';

interface state {
    todos: TodoI[]
};

interface props {
    filterBy: string
}

interface TodoI {
    index: number, content: string, isDone: boolean, timestamp: string
}

class Todo extends Component<props, state> {
    constructor(props: any) {
        super(props);
        const lastWeekDate = new Date();
        lastWeekDate.setDate(lastWeekDate.getDate() - 2);
        const currMonthDate = new Date();
        currMonthDate.setDate(currMonthDate.getDate() - 10);
        this.state = {
            todos: [
                {index: 101, content: 'This is my first task', isDone: false, timestamp: new Date().toDateString()},
                {index: 102, content: 'Second task', isDone: false, timestamp: new Date().toDateString()},
                {index: 103, content: 'Third task is completed!', isDone: true, timestamp: new Date().toDateString()},
                {index: 104, content: 'Fourth task and so on...', isDone: false, timestamp: new Date().toDateString()},
                {index: 105, content: 'Week old task 1', isDone: false, timestamp: lastWeekDate.toDateString()},
                {index: 106, content: 'Week old task 2', isDone: false, timestamp: lastWeekDate.toDateString()},
                {index: 107, content: 'Month start task...', isDone: false, timestamp: currMonthDate.toDateString()}
            ]
        }
    }
    // static getDerivedStateFromProps = (props: props, state: state) => {
    //     const lastWeekDate = new Date();
    //     lastWeekDate.setDate(lastWeekDate.getDate() - 2);
    //     const currMonthDate = new Date();
    //     currMonthDate.setDate(currMonthDate.getDate() - 10);
    //     const todos = [
    //         {index: 0, content: 'This is my first task', isDone: false, timestamp: new Date().toDateString()},
    //         {index: 1, content: 'Second task', isDone: false, timestamp: new Date().toDateString()},
    //         {index: 2, content: 'Third task is completed!', isDone: true, timestamp: new Date().toDateString()},
    //         {index: 3, content: 'Fourth task and so on...', isDone: false, timestamp: new Date().toDateString()},
    //         {index: 4, content: 'Week old task 1', isDone: false, timestamp: lastWeekDate.toDateString()},
    //         {index: 5, content: 'Week old task 2', isDone: false, timestamp: lastWeekDate.toDateString()},
    //         {index: 6, content: 'Month start task...', isDone: false, timestamp: currMonthDate.toDateString()}
    //     ];
    //     if(props.filterBy === 'Today') {
    //         return {
    //             todos: todos.filter((item) => new Date(item.timestamp).getDate() === new Date().getDate())
    //         }
    //     } else if(props.filterBy === 'Week') {
    //         return {
    //             todos: todos.filter((item) => new Date(item.timestamp).getDate() - new Date().getDate() < 7)
    //         }
    //     } else {
    //         return {
    //             todos: todos.filter((item) => new Date(item.timestamp).getDate() - new Date().getDate() < 31)
    //         }
    //     }
    // }
    // adds a new todo
    handleAddTodo = (content: string) => {
        const newItem = {
            index: this.state.todos[this.state.todos.length-1].index + 1,
            content,
            isDone: false,
            timestamp: new Date().toDateString()
        }
        this.setState({
            todos: [...this.state.todos, newItem]
        });
    }
    // updates a todo
    handleEditTodo = (index: number, content: string) => {
        const todos = this.state.todos;
        todos[todos.findIndex(todo => todo.index === index)].content = content;
        this.setState({
            todos
        });
    }
    // toggles complete status of todo
    handleOnCheck = (index: number, isDone: boolean) => {
        const todos = this.state.todos;
        todos[todos.findIndex(todo => todo.index === index)].isDone = isDone;
        this.setState({
            todos
        });
    }
    // deletes a todo
    handleDelete = (index: number) => {
        const todos = this.state.todos.filter(e => e.index !== index);
        this.setState({
            todos
        });
    }
    // display heading text based on filter
    getDateRange() {
        switch(this.props.filterBy) {
            case 'Today':
                return new Date().toDateString();
            case 'Week':
                return 'This Week List'
            case 'Month':
                return 'This Month List'
        }
    }
    renderTodoItems() {
        return this.state.todos.map((item, i) => {
            return <TodoItem {...item} key={i} index={item.index} onCheck={this.handleOnCheck} onEditTodo={this.handleEditTodo} onDeleteTodo={this.handleDelete} />
        })
    }
    render() {
        return (
            <div className="row todo">
                <div className="col-12">
                    <h4>{this.props.filterBy}</h4><span>{this.getDateRange()}</span>
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
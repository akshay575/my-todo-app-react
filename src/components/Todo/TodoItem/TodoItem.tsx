import React, { Component } from "react";
import './TodoItem.css';
import AddTodo from "../AddTodo/AddTodo";

interface props {
    index: number,
    content: string,
    isDone: boolean,
    onCheck: any,
    onEditTodo: any,
    onDeleteTodo: any
};

interface state {
    isEdit: boolean,
    content: string
}

export default class TodoItem extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            isEdit: false,
            content: this.props.content
        }
    }
    onChange = () => {
        this.props.onCheck(this.props.index, !this.props.isDone)
    }
    handleClick = () => {
        this.setState({
            isEdit: true
        })
    }
    handleCancel = () => {
        this.setState({
            isEdit: false
        })
    }
    handleEdit = (content: string) => {
        this.props.onEditTodo(this.props.index, content);
        this.handleCancel();
    }
    handleDelete = () => {
        this.props.onDeleteTodo(this.props.index);
        this.handleCancel();
    }
    renderAddorEdit() {
        console.log('render add or edit');
        if(this.state.isEdit) {
            return <AddTodo onAddTodo={null} onEditTodo={this.handleEdit} onCancelTodo={this.handleCancel} onDeleteTodo={this.handleDelete} isEdit={true} content={this.state.content} />
        } else {
            return (
                <div className="todo-item" >
                    <input type="checkbox" checked={this.props.isDone} onChange={this.onChange} />
                    <span onClick={this.handleClick} className={this.props.isDone ? 'item-checked' : ''}>{this.props.content}</span>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="todo-block">
                {this.renderAddorEdit()}
            </div>
        );
    }
}

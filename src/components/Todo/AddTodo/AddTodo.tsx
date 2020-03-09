import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import './AddTodo.css';

interface props {
    content: string,
    isEdit: boolean
    onAddTodo: any,
    onEditTodo: any,
    onCancelTodo: any,
    onDeleteTodo: any
};

interface state {
    content: string,
    isAddItem: boolean
};

export default class AddTodo extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: this.props.content,
            isAddItem: false
        };
    }
    onChange = (event: any) => {
        console.log('on change', event.target.value);
        this.setState({
            content: event.target.value
        })
    }
    // enable add todo textbox
    onAddTodo = () => {
        this.setState({
            isAddItem: true
        });
    }
    onCancel = () => {
        this.setState({
            isAddItem: false
        });
        this.props.onCancelTodo();
    }
    onSaveTodo = () => {
        console.log('on save click');
        this.props.onAddTodo(this.state.content);
        this.setState({
            content: ''
        })
    }
    onEditTodo = () => {
        console.log('on edit click');
        this.props.onEditTodo(this.state.content);
        this.setState({
            content: ''
        })
    }
    renderDefault() {
        return (
            <div className="col-12 text-right">
                <Button variant="outline-dark" onClick={this.onAddTodo}><i className="fas fa-plus icon"></i>Add Task</Button>
            </div>
        )
    }
    renderAddTodo() {
        console.log('Clicked');
        return (
            <React.Fragment>
                <div className="col-12">
                    <input autoFocus className="input-todo" type="text" value={this.state.content} onChange={this.onChange} placeholder="Add a todo item..." />
                </div>
                <div className="col-8 btn-group-todo">
                    {this.props.isEdit ? (
                        <>
                            <Button className="btn-space" variant="outline-dark" onClick={this.onEditTodo}>Edit Task</Button>
                            <Button className="btn-space" variant="outline-dark" onClick={this.props.onDeleteTodo}>Delete Task</Button>
                        </>
                    ): (<Button variant="outline-dark" onClick={this.onSaveTodo}>Add Task</Button>)}
                    <Button className="btn-space" variant="outline-danger" onClick={this.onCancel}>Cancel</Button>
                </div>
            </React.Fragment>
        );
    }
    render() {
        return (
            <div className="add-todo">
                <div className="row">
                    {this.state.isAddItem || this.props.isEdit ? this.renderAddTodo() : this.renderDefault() }
                </div>
            </div>
        );
    }
}
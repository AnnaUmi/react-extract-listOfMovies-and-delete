import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        value: this.props.value
    }
    /*  constructor() {
         super();
         this.handleIncrement = this.handleIncrement.bind(this)
     } */
    handleIncrement = product => {
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                <span className={this.getBangeClasses()}>{this.formatCount()}</span>
                <button onClick={(product) => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
                <burtton onClick={(e) => this.handleDelete(e)} className="btn btn-danger btn-sm m-2">Delete</burtton>
            </div>
        );
    }
    handleDelete = (e) => {
        console.log(e)
    }
    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value
    }
    getBangeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes
    }

}
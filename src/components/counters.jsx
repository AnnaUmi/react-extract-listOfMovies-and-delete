import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-warning btn-sm m-2">Reset</button>
                {this.props.children}
                {this.props.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement = {this.props.onIncrement} onDecrement = {this.props.onDecrement} counter={counter}>

                    </Counter>)}
            </div>
        )
    }
}
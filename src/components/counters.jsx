import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  // NOTE: prop is read only
  render() {
    console.log('Counters - Rendered');

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} // must because it is used internally by react
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter} // now in counter.js we use this obj to get values ex. this.props.counter.id
          />
        ))}
      </div>
    );
  }
}

export default Counters;

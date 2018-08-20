import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    // Ajax call
    console.log('App - Mounted');
  }

  handleIncrement = counter => {
    // ... is called spread operator, it iterates through an array and creates a copy
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // clone the counters obj, don't ever modify the counters obj directly
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // since {counters: counters} values are same, just use {counters}
  };

  render() {
    console.log('App - Rendered');

    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset} 
          onDelete={this.handleDelete} 
          onIncrement={this.handleIncrement}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

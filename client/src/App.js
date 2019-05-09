import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { test: [] }

  // Fetch after first mount
  componentDidMount() {
    this.getTest();
  }

  getTest = () => {
    fetch('/api/test')
      .then(res => res.json())
      .then(test => this.setState({ test }));
  }

  render() {
    const { test } = this.state;

    return (
      <div className="App">
        {test.length ? (
          <div>
            <h1>Test Random Numbers</h1>
            <ul className="numbers">
              {test.map((t, index) =>
                <li key={index}>
                  {t}
                </li>
              )}
            </ul>
          </div>
        ) : (
            <div>
              <h1>No tests :</h1>
            </div>
        )}
        <button
          className="more"
          onClick={this.getTest}>
          Click Me for Numbers
        </button>
      </div>
    );
  }
}

export default App;
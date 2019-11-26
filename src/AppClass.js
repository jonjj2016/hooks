import React, { Component } from 'react';

class App extends React.Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };
  componentDidMount() {
    document.title = `You clicked ${this.state.count}`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count}`;
  }
  handleMouseMove = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY
    });
  };
  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }
  toggleLight = () => {
    this.setState(prevState => {
      return { isOn: !prevState.isOn };
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <h2>{this.state.x} :X</h2>
        <h2>{this.state.y} :Y</h2>
        <h1> Counter {this.state.count} </h1>{' '}
        <button onClick={this.incrementCount}> Click me </button>{' '}
        <h1>Toggle Light</h1>
        <div
          style={{
            height: '50px',
            width: '50px',
            background: `${this.state.isOn ? 'yellow' : 'grey'}`
          }}
          onClick={this.toggleLight}
        ></div>
      </>
    );
  }
}

export default App;

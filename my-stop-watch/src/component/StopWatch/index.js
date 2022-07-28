import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.intevalId = null;
  }

  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.intevalId === null) this.intevalId = setTimeout(this.tick, 1000);
  };
  stop = () => {
    clearInterval(this.intevalId);
    this.intevalId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidUpdate() {
    console.log("componentDidUpdate");
    //setTimeout(this.tick, 1000);
    this.stop();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <h1>Hi!</h1>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}

export default StopWatch;

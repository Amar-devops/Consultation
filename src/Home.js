import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Good Morning All , Happy Sunday! </h1>
        <h2>Welcome To Online Doctor Consultation App</h2>
        <button onClick={this.props.login}>Log In</button>
      </div>
    );
  }
}

export default Home;

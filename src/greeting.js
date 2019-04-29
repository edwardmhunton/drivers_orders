import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="greeting">Hello, {this.props.name}!</div>;
  }
}

export default Main;

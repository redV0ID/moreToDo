import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Todo = props => (
  <li>
    <input type="checkbox" />
    <span>{props.text}</span>
    <button>Delete</button>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        <ul>{this.state.todos.map(todo => <Todo todo={todo} />)};</ul>
      </div>
    );
  }
}

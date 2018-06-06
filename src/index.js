import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Todo = props => (
  <li>
    <input type="checkbox" />
    <span>{props.todo.text}</span>
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

  addTodo() {
    const text = prompt("Write something!");
    this.setState({
      todos: [...this.state.todos, { text: text }] //nice
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>{this.state.todos.map(todo => <Todo todo={todo} />)}</ul>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));

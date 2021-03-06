import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

let id = 0;

const Todo = props => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  addTodo() {
    const text = prompt("Write something!");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text }] //nice
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length} </div>
        <div>
          Unchecked: {this.state.todos.filter(todo => !todo.checked).length}{" "}
        </div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));

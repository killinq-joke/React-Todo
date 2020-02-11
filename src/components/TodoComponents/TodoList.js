import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo
              todo={todo}
              markCompleted={evt => this.props.markCompleted(todo.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;

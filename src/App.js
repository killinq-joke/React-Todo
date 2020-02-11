import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import uuid from "uuid";

const initialTodos = [
  {
    task: "Organize Garage",
    id: uuid(),
    completed: true
  },
  {
    task: "Bake Cookies",
    id: uuid(),
    completed: false
  }
];

const fakeTodosEndpoint = () => {
  return Promise.resolve(initialTodos);
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodoValue: ""
    };
  }

  componentDidMount() {
    fakeTodosEndpoint().then(todos => {
      this.setState(oldState => {
        return {
          todos
        };
      });
    });
  }

  valueChange = event => {
    const newValue = event.target.value;
    console.log(event.target.value);
    this.setState(oldState => {
      return {
        newTodoValue: newValue
      };
    });
  };

  addTodo = event => {
    console.log("click");
    event.target.value = "";
    this.setState(oldState => {
      return {
        newTodoValue: "",
        todos: oldState.todos.concat({
          completed: false,
          id: uuid(),
          task: oldState.newTodoValue
        })
      };
    });
  };

  markCompleted = id => {
    
    this.setState(oldState => {
      return {
        todos: oldState.todos.map(todo => {
          
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } 
          return todo;
          
        })
      };
    });
  };

  clearCompleted = event => {
    this.setState(oldState => {
      return {
        todos: oldState.todos.filter(todo => todo.completed === false)
      };
    });
  };

  //onClick={this.markCompleted(todo.id)}

  render() {
    return (
      <div>
        <TodoList
        todos={this.state.todos}
        markCompleted={this.markCompleted}
        />

        <TodoForm
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
          addTodo={this.addTodo}
          valueChange={this.valueChange}
        />
      </div>
    );
  }
}

export default App;

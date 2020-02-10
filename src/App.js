import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import uuid from 'uuid';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
          todos: [],
          newTodoValue: '',

      }
  }

  valueChange = event => {
    const newValue = event.target.value;
    console.log(event.target.value)
    this.setState(oldState => {
      return{
        newTodoValue: newValue,
      }
    })
  }

  addTodo = event => {
    console.log('click');
    event.target.value = '';
    this.setState(oldState => {
      return{
        newTodoValue: '',
        todos: oldState.todos.concat({
          completed: false,
          id: uuid(),
          task: oldState.newTodoValue
        }),
      }
    })
  }

  // markCompleted = id => {
    
  //   this.setState(oldState => {
  //     return {
  //       todos: oldState.map(todo => {
  //         todo
  //       })
        
  //     }
  //   })
  // }

  clearCompleted = event => {
    this.setState(oldState => {
          const arr = oldState.map();
          console.log(arr);
      return {
        todos: arr.filter(todo => todo.completed === false)
          
        }
      })
  }

//onClick={this.markCompleted(todo.id)}

  render() {
    return (
      <div>
        {this.state.todos.map(todo => {
          const color = todo.completed ? 'green' : 'red'
          console.log(todo.task);
          return(
          <a style={{ color }}  key={todo.id}>{todo.task}</a>
          )
        })}
        <input onChange={this.valueChange}></input>
        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;

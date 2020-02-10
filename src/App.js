import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import uuid from 'uuid';

const initialTodos = [
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: true
  },
  {
    task: 'Bake Cookies',
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
          newTodoValue: '',

      }
  }

  componentDidMount() {
   
    fakeTodosEndpoint()
      .then(todos => {
        this.setState(oldState => { 
          return {
           
            todos,
            
          }
        })
        
      })
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

//   markCompleted = id => {
//     this.setState(oldState => {
//       let newState = oldState.todos.map(todo => {
//         console.log(todo.completed)
//       if (todo.id === id){
        
//         todo.completed === !todo.completed ;
  
//       }
//       console.log(newState)
//       return{
//         todos: newState,
//       }

//     })
    
//   })
    
// }
        
        
        
    
    
  

  clearCompleted = event => {
    this.setState(oldState => {
     
      return {
        todos: oldState.todos.filter(todo => todo.completed === false)
          
        }
      })
  }

//onClick={this.markCompleted(todo.id)}

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo} valueChange={this.valueChange}/>
        
      </div>
    );
  }
}

export default App;

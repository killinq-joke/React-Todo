import React, { Component } from 'react';

class TodoForm extends Component{
    
   

    render() {
        return(
            <div>
                <input onChange={this.props.valueChange}></input>
                <button onClick={this.props.addTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
                
            </div>      
        )
    }
}

export default TodoForm;
import React, { Component } from 'react';


class Todo extends Component {
    render() {
        
    const color = this.props.todo.completed ? 'green' : 'red';  
    
        return(
            
            <div style={{ color }} key={this.props.todo.id}>{this.props.todo.task}
                <button>check</button>
            </div>
        )
    }
}

export default Todo;
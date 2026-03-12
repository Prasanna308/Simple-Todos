import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow'},
  {id: 3, title: 'Confirm the slot for yoga class'},
  {id: 4, title: 'Drop the parcel at the post office'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm the slot for swimming class'},
  {id: 8, title: 'Drop kids at school'},
  {id: 9, title: 'Prepare for presentation'},
  {id: 10, title: 'Reply to emails'},
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  onDeleteTodo = id => {
    const {todosList} = this.state
    const updatedTodos = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: updatedTodos})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <div className="todos-container">
          <h1 className="main-heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id} // ✅ unique key for each item
                todoDetails={eachTodo}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

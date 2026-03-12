import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    inputText: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedList = todosList.filter(each => each.id !== id)
    this.setState({todosList: updatedList})
  }

  updateTodo = (id, newTitle) => {
    const {todosList} = this.state
    const updated = todosList.map(each => {
      if (each.id === id) {
        return {...each, title: newTitle}
      }
      return each
    })
    this.setState({todosList: updated})
  }

  changeInput = event => {
    this.setState({inputText: event.target.value})
  }

  addTodo = () => {
    const {inputText, todosList} = this.state
    if (inputText === '') return

    const parts = inputText.split(' ')
    const lastWord = parts[parts.length - 1]

    let count = 1
    let title = inputText

    if (!Number.isNaN(Number(lastWord))) {
      count = Number(lastWord)
      title = parts.slice(0, parts.length - 1).join(' ')
    }

    const newTodos = []

    for (let i = 0; i < count; i += 1) {
      newTodos.push({
        id: Date.now() + i,
        title,
      })
    }

    this.setState({
      todosList: [...todosList, ...newTodos],
      inputText: '',
    })
  }

  render() {
    const {todosList, inputText} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>

          <div className="add-container">
            <input
              type="text"
              value={inputText}
              onChange={this.changeInput}
              className="input"
            />
            <button type="button" onClick={this.addTodo} className="add-btn">
              Add
            </button>
          </div>

          <ul className="todos-list">
            {todosList.map(each => (
              <TodoItem
                key={each.id}
                todo={each}
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

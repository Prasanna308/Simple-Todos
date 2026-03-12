import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    isEditing: false,
    editText: '',
    isCompleted: false,
  }

  onDelete = () => {
    const {todo, deleteTodo} = this.props
    deleteTodo(todo.id)
  }

  onEdit = () => {
    const {todo} = this.props
    this.setState({
      isEditing: true,
      editText: todo.title,
    })
  }

  onSave = () => {
    const {todo, updateTodo} = this.props
    const {editText} = this.state

    updateTodo(todo.id, editText)
    this.setState({isEditing: false})
  }

  changeText = event => {
    this.setState({editText: event.target.value})
  }

  toggleCheckbox = () => {
    this.setState(prev => ({
      isCompleted: !prev.isCompleted,
    }))
  }

  render() {
    const {todo} = this.props
    const {isEditing, editText, isCompleted} = this.state

    return (
      <li className="todo-item">
        <input type="checkbox" onChange={this.toggleCheckbox} />

        {isEditing ? (
          <input type="text" value={editText} onChange={this.changeText} />
        ) : (
          <p
            style={{
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </p>
        )}

        {isEditing ? (
          <button type="button" onClick={this.onSave}>
            Save
          </button>
        ) : (
          <button type="button" onClick={this.onEdit}>
            Edit
          </button>
        )}

        <button type="button" onClick={this.onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem

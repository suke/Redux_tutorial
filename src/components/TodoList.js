import React from 'react'
import Todo from './Todo'

export default ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

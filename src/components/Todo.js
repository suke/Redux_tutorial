import React from 'react'
import styled from 'styled-components'

export default ({ onClick, completed, text }) => (
  <Li onClick={onClick} completed={completed}>
    {text}
  </Li>
)

const Li = styled.li`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`

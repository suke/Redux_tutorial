import React from 'react'
import styled from 'styled-components'

export default ({ active, children, onClick }) => (
  <Button onClick={onClick} disabled={active}>
    {children}
  </Button>
)

const Button = styled.button`
  margin-left: 4px;
`

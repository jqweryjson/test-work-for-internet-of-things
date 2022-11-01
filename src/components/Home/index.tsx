import { Container } from '@mui/material'
import * as React from 'react'
import { Form } from '../Form'

import schema from '../../schema.json'

const Home: React.FC = () => {
  return (
    <Container>
      <Form schema={schema} />
    </Container>
  )
}

export { Home }

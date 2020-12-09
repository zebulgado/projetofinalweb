import React from 'react'
import { Form, FormGroup, Input, Label, Button, Container } from 'reactstrap'
import style from '../../styles/loginwindow.module.css'

export default function LoginWindow() {
  return (
    <Container className={style.loginContainer}>
      <Form>
        <FormGroup>
          <Label for="cnpjInput">CNPJ</Label>
          <Input
            type="text"
            id="cnpjInput"
          ></Input>
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Submit
      </Button>
      </Form>
    </Container>
  )
}

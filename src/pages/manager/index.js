import React from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import style from '../../styles/manager.module.css'

export default function manager(props) {
    return (
        <div>
            <Col>
                <Row>
                    <img className='' src='https://media-cdn.tripadvisor.com/media/photo-w/14/14/30/ff/fachada.jpg'></img>
                </Row>
            </Col>
            <Container className={style.managerContainer}>
            <Col>
                <Row>
                    <Label>{props.nome}Nome do hotel</Label>
                </Row>
                <Row>
                    <Label>{props.avaliacao}Avaliação</Label>
                </Row>
                <Row>
                    <Label>{props.contato}Contato</Label>
                </Row>
                <Row>
                    <Col>
                        <Row className="mr-4">
                            <Label>
                                Telefone
                        </Label>
                        </Row>
                        <Row className="mr-4">
                            <Input>{props.telefone}</Input>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="ml-4">
                            <Label>
                                Email
                        </Label>
                        </Row>
                        <Row className="ml-4">
                            <Input>{props.email}</Input>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Label>{props.diaria}Valor da diária para clientes fidelidade</Label>
                </Row>
                <Row>
                    <Col>
                        <Row className="mr-4">
                            <Label>Dia de semana</Label>
                        </Row>
                        <Row className="mr-4">
                            <Input>{props.diaiaregularsemana}</Input>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="ml-4">
                            <Label>Final de semana</Label>
                        </Row>
                        <Row className="ml-4">
                            <Input>{props.diariaregularfinalsemana}</Input>
                        </Row>
                    </Col>
                </Row>
            </Col>
            </Container>
        </div>
    )
}

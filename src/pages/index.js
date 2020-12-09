import React from 'react';
import Titulo from '../components/TituloH1/tituloH1'
import LoginWindow from '../components/LoginWindow/index'
import {
  Row,
  Container,
  Col
} from "reactstrap";
import Head from 'next/head'

export default function Home() {
  return (
    <Container className='mt-5'>
      <Head>
        <title>Gerenciador de Hotéis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col xl={12}>
          <Titulo texto='Bem vindo ao sistema para gerenciar seu Hotel!' />
        </Col>
      </Row>
      <LoginWindow />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </Container>
  );
}

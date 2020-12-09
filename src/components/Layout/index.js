import React from 'react';
import { Container } from 'reactstrap';
import Navbar from '../Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        <Container>
        {children}
        </Container>
        </div>
    </div>
  );
}
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

export default function Shell() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

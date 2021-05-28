import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import { Navbar, Nav, Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Style from '../styles/Header.module.css'
import AuthContext from '../stores/authContext';

const Header = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const {user, login} = useContext(AuthContext) 
  console.log(user)

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={Style.header}>
        <Container>
        <Navbar.Brand href="/"><Image src="/covid-logo.svg" width={150} height={60}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/"><a className={router.pathname == "/" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Kerala</a></Link>
            <Link href="/about"><a className={router.pathname == "/about" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Countries</a></Link>
            {/* <Link href="/services"><a className={router.pathname == "/services" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Services</a></Link>
            <Link href="/projects"><a className={router.pathname == "/projects" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Projects</a></Link> */}
            <Link href="/blogs/"><a className={router.pathname == "/blogs" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Blog</a></Link>
            <Link href="/contact"><a className={router.pathname == "/contact" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Contact</a></Link>
            <Button type="primary" className="ms-5" onClick={login}>Login</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="username" defaultValue="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="link" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">
            Login
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Header;

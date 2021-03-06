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

  const {user, login, logout, authReady} = useContext(AuthContext) 
  console.log(user)

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={Style.header}>
        <Container>
        <Navbar.Brand href="/">
        <svg width="150" height="60" viewBox="0 0 98 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8516 12.2227C14.7969 13.4102 14.4766 14.4609 13.8906 15.375C13.3047 16.2812 12.4805 16.9844 11.418 17.4844C10.3633 17.9844 9.15625 18.2344 7.79688 18.2344C5.55469 18.2344 3.78906 17.5039 2.5 16.043C1.21094 14.582 0.566406 12.5195 0.566406 9.85547V9.01172C0.566406 7.33984 0.855469 5.87891 1.43359 4.62891C2.01953 3.37109 2.85938 2.40234 3.95312 1.72266C5.04688 1.03516 6.3125 0.691406 7.75 0.691406C9.82031 0.691406 11.4844 1.23828 12.7422 2.33203C14 3.41797 14.7148 4.91797 14.8867 6.83203H10.7852C10.7539 5.79297 10.4922 5.04688 10 4.59375C9.50781 4.14062 8.75781 3.91406 7.75 3.91406C6.72656 3.91406 5.97656 4.29688 5.5 5.0625C5.02344 5.82812 4.77344 7.05078 4.75 8.73047V9.9375C4.75 11.7578 4.97656 13.0586 5.42969 13.8398C5.89062 14.6211 6.67969 15.0117 7.79688 15.0117C8.74219 15.0117 9.46484 14.7891 9.96484 14.3438C10.4648 13.8984 10.7305 13.1914 10.7617 12.2227H14.8516ZM31.2461 9.82031C31.2461 11.4844 30.9375 12.957 30.3203 14.2383C29.7031 15.5195 28.8242 16.5078 27.6836 17.2031C26.5508 17.8906 25.2578 18.2344 23.8047 18.2344C22.3516 18.2344 21.0625 17.9023 19.9375 17.2383C18.8125 16.5664 17.9336 15.6094 17.3008 14.3672C16.6758 13.125 16.3477 11.6992 16.3164 10.0898V9.12891C16.3164 7.45703 16.6211 5.98438 17.2305 4.71094C17.8477 3.42969 18.7266 2.44141 19.8672 1.74609C21.0156 1.05078 22.3203 0.703125 23.7812 0.703125C25.2266 0.703125 26.5156 1.04687 27.6484 1.73438C28.7812 2.42188 29.6602 3.40234 30.2852 4.67578C30.918 5.94141 31.2383 7.39453 31.2461 9.03516V9.82031ZM27.0625 9.10547C27.0625 7.41016 26.7773 6.125 26.207 5.25C25.6445 4.36719 24.8359 3.92578 23.7812 3.92578C21.7188 3.92578 20.6289 5.47266 20.5117 8.56641L20.5 9.82031C20.5 11.4922 20.7773 12.7773 21.332 13.6758C21.8867 14.5742 22.7109 15.0234 23.8047 15.0234C24.8438 15.0234 25.6445 14.582 26.207 13.6992C26.7695 12.8164 27.0547 11.5469 27.0625 9.89062V9.10547ZM39.7305 13.3594L43.1289 0.9375H47.7227L41.9805 18H37.4805L31.7852 0.9375H36.3438L39.7305 13.3594ZM53.3594 18H49.2578V0.9375H53.3594V18ZM56.2188 18V0.9375H61.7148C63.2227 0.9375 64.5781 1.28125 65.7812 1.96875C66.9844 2.64844 67.9219 3.61328 68.5938 4.86328C69.2734 6.10547 69.6172 7.5 69.625 9.04688V9.83203C69.625 11.3945 69.293 12.7969 68.6289 14.0391C67.9727 15.2734 67.043 16.2422 65.8398 16.9453C64.6445 17.6406 63.3086 17.9922 61.832 18H56.2188ZM60.332 4.11328V14.8359H61.7617C62.9414 14.8359 63.8477 14.418 64.4805 13.582C65.1133 12.7383 65.4297 11.4883 65.4297 9.83203V9.09375C65.4297 7.44531 65.1133 6.20312 64.4805 5.36719C63.8477 4.53125 62.9258 4.11328 61.7148 4.11328H60.332ZM80.2422 18H76.2812V5.39062L72.3906 6.52734V3.52734L79.8789 0.9375H80.2422V18ZM93.168 11.4023C92.3164 12.168 91.3633 12.5508 90.3086 12.5508C88.7617 12.5508 87.5352 12.0273 86.6289 10.9805C85.7227 9.93359 85.2695 8.53516 85.2695 6.78516C85.2695 5.69141 85.5234 4.67578 86.0312 3.73828C86.5391 2.80078 87.25 2.05859 88.1641 1.51172C89.0859 0.964844 90.1016 0.691406 91.2109 0.691406C92.3359 0.691406 93.3516 0.976562 94.2578 1.54688C95.1719 2.10938 95.8828 2.91016 96.3906 3.94922C96.8984 4.98047 97.1602 6.17188 97.1758 7.52344V9.03516C97.1758 10.918 96.8047 12.5508 96.0625 13.9336C95.3281 15.3164 94.2773 16.3789 92.9102 17.1211C91.543 17.8633 89.9492 18.2344 88.1289 18.2344H87.8828V15.0703L88.6328 15.0586C91.3516 14.9258 92.8633 13.707 93.168 11.4023ZM91.375 9.70312C92.2344 9.70312 92.8516 9.33203 93.2266 8.58984V6.94922C93.2266 5.85547 93.043 5.04688 92.6758 4.52344C92.3086 4 91.8125 3.73828 91.1875 3.73828C90.6328 3.73828 90.168 4.03516 89.793 4.62891C89.418 5.22266 89.2305 5.94141 89.2305 6.78516C89.2305 7.67578 89.4219 8.38672 89.8047 8.91797C90.1875 9.44141 90.7109 9.70312 91.375 9.70312Z" fill="black"/>
        </svg>

          {/* <Image src="/covid-logo.svg" width={150} height={60}></Image> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/"><a className={router.pathname == "/" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Kerala</a></Link>
            <Link href="/about"><a className={router.pathname == "/about" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Countries</a></Link>
            {/* <Link href="/services"><a className={router.pathname == "/services" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Services</a></Link>
            <Link href="/projects"><a className={router.pathname == "/projects" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Projects</a></Link> */}
            <Link href="/blogs/"><a className={router.pathname == "/blogs" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Blog</a></Link>
            <Link href="/contact"><a className={router.pathname == "/contact" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Contact</a></Link>
            {authReady && (
                  <>
                    {user &&  <a className="p-2 pe-auto">{user.user_metadata.full_name}</a>}
                    {!user && <Button type="primary" className="ms-5" onClick={login}>Login</Button>}
                    {user && <Button type="primary" className="ms-2" onClick={logout}>Logout</Button>}
                  </>
              )
            }
            
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

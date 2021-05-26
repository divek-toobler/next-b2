import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

import { Navbar, Nav, Container } from 'react-bootstrap';
import Style from '../styles/Header.module.css'

const Header = () => {

  const router = useRouter();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={Style.header}>
        <Container>
        <Navbar.Brand href="#home"><Image src="/vercel.svg" width={150} height={60}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/"><a className={router.pathname == "/" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Home</a></Link>
            <Link href="/about"><a className={router.pathname == "/about" ? "p-2 pe-auto active" : "p-2 pe-auto"}>About</a></Link>
            <Link href="/services"><a className={router.pathname == "/services" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Services</a></Link>
            <Link href="/projects"><a className={router.pathname == "/projects" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Projects</a></Link>
            <Link href="/blogs/"><a className={router.pathname == "/blogs" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Blog</a></Link>
            <Link href="/contact"><a className={router.pathname == "/contact" ? "p-2 pe-auto active" : "p-2 pe-auto"}>Contact</a></Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

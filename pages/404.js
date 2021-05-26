import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
                <h2>Ooops!!! Page not found</h2>
                <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site. <Link href="/">Go Home</Link></p>
            </Container>
        </div>
    )
}

export default NotFound;
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Google Books</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                <Nav.Link><Link to="/saved">Saved</Link></Nav.Link>
            </Nav>
        </Navbar>
        <Jumbotron>
                <h1 className="jumbo">(React) Google Books Search</h1>
                <p className="jumbo">Search for your new or your favorite books and save them for future reference!</p>
        </Jumbotron>
        </>
    );
}
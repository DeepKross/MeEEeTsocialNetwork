import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";

function CollapsibleExample(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MeEEeT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/profile">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Photos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/messages">
                            Messages
                        </Nav.Link>
                        <Nav.Link href="/users">
                            Users
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link>
                            <NavLink to={"/login"}>
                                {props.isAuth ? props.login : <div>LogIn</div>}
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
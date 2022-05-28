import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    // for handling sign out
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Books Heaven</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            {/* This options will only appear for logged in users */}
                            {
                                user ? <Nav.Link as={Link} to='/manageItems'>Manage Items</Nav.Link>
                                    : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to='/myItems'>My Items</Nav.Link>
                                    : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to='/addItems'>Add Items</Nav.Link>
                                    : ''
                            }
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        </Nav>

                        <Nav>
                            {/* This option will only appear for logged in users */}
                            {
                                user ? <button onClick={handleSignOut} className='btn btn-link text-decoration-none'>Logout</button>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
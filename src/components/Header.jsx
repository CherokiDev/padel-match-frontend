import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/playersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
    const { playerInfo } = useSelector(state => state.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Padel Match</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                playerInfo
                                ? 
                                (
                                    <>
                                        <NavDropdown title={playerInfo.name} id="username">
                                            <LinkContainer to="/profile">
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Item onClick={ logoutHandler }>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                )
                                : 
                                (
                                    <>
                                        <LinkContainer to="/login">
                                            <Nav.Link><FaSignInAlt /> Iniciar sesión</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/register">
                                            <Nav.Link><FaSignOutAlt /> Registrarse</Nav.Link>
                                        </LinkContainer>
                                    </>
                                )
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>      
        </header>
    )
}

export default Header;
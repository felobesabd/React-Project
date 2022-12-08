import { Navbar, Container, FormControl, Nav } from 'react-bootstrap';
import logo from '../images/logo.png'
import login from '../images/login.png'
import cart from '../images/cart.png'
import NavSearchHook from "../hookAbbreviation/All Search/NavSearchHook";

const NavComp = () => {

    const [searchWord, onChangeSearchWord] = NavSearchHook()

    let word = '';
    if (localStorage.getItem('SearchWord') != null)
        word = localStorage.getItem('SearchWord')

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
            <Navbar.Brand>
                <a href='/'>
                    <img src={logo} className='logo' alt=''/>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <FormControl
                    onChange={onChangeSearchWord}
                    value={word}
                    type="search"
                    placeholder="search"
                    className="me-2 w-100 text-center"
                    aria-label="Search"
                />
                <Nav className="me-auto">
                    <Nav.Link href='/login'
                        className="nav-text d-flex mt-3 justify-content-center">
                        <img src={login} className="login-img" alt="" />
                        <p style={{ color: "white" }}>Login</p>
                    </Nav.Link>
                    <Nav.Link href='/cart'
                        className="nav-text d-flex mt-3 justify-content-center"
                        style={{ color: "white" }}>
                        <img src={cart} className="login-img" alt="" />
                        <p style={{ color: "white" }}>Cart</p>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default NavComp;
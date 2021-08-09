import { Container, Navbar,Nav ,NavDropdown} from "react-bootstrap";
import logo from '../images/plane.png';
import notofication from '../images/bell.png';
import profile from '../images/user.png';
const Navigation = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg"  top="fixed" className="custom-bg header">
            <Container className="containerCls">
              <Navbar.Brand href="#home" className="brandCls">
              <img
          alt=""
          src={logo}
          width="28"
          height="28"
          className="d-inline-block align-top" style={{marginTop:'5px'}}
        /><span className="custom-color" style={{marginLeft:'5px'}}>iti</span>lite</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navCls">
                  <Nav.Link href="#features" className="active">Dashboard</Nav.Link>
                  <Nav.Link>Create new trip</Nav.Link>
                  <Nav.Link>Service Request</Nav.Link>
                  <Nav.Link>Use IL Cash</Nav.Link>
                </Nav>
                <Nav className="specialNavCls">
                    <Nav.Link> 
                      <img
                      alt=""
                      src={notofication}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />
                    </Nav.Link>
                    <Nav.Link> 
                      <img
                      alt=""
                      src={profile}
                      width="20"
                      height="20"
                      className="d-inline-block align-top"
                    />
                    </Nav.Link>
                    <NavDropdown title="Abi" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
}

export default Navigation;
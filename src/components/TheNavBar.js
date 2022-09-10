import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './styles.css'

function TheNavBar() {
  return (
    <Navbar className="navbar" bg="light" expand="xxl">
      <Container className="navbar-container">
        <div className="navbar-logo"> <img className="logo" src="https://assets.webbank.com/webbank-logo.svg" alt="logo"></img></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Personal" id="basic-nav-dropdown">
              <NavLink to="/pages/personal/BrandPartners">
              <NavDropdown.Item href="/pages/personal/BrandPartners">

                  Brand Partners

              </NavDropdown.Item>
              </NavLink>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to="/pages/personal/DepositProducts"> Deposit Products </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Business Partner" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <NavLink to="/pages/business/BusinessBrandPartners">Brand Partners</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to="/pages/business/AssetFinance">
                  Asset Finance
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <NavLink to="/pages/business/Commercial">
                  Commercial Insurance Premium Finance
                </NavLink>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#link">
              <NavLink to="/pages/BecomePartner">Become A Partner</NavLink>
            </Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TheNavBar;

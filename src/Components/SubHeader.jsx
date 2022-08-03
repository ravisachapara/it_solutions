import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SubHeader = () => {
  const [menuIndex, setMenuIndex] = React.useState(0)

  const menuData = [
    {
      name: 'Home',
      to: "/",
      index: 0
    },
    {
      name: 'About_us',
      to: "/about_us",
      index: 1
    },
    {
      name: 'Services',
      to: "/services",
      index: 2
    },
    {
      name: 'Protfolio',
      to: "/protfolio",
      index: 3 
    },
    {
      name: 'Testimonials',
      to: "/testimonials",
      index: 4 
    },
    {
      name: 'Contact Us',
      to: "/contact_us",
      index: 5
    },
  ];

  const setActive = (e) => {
    setMenuIndex(e)
  }

  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src='/images/logo-3.png' className='mainLogo'></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                menuData.map((e, index) => {
                  return <Nav.Link> <Link className={"headerMenu " + (e.index === menuIndex ? 'headerMenu_active' : '')} onClick={() => setActive(e.index)} to={e.to}>{e.name}</Link> </Nav.Link>
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default SubHeader;

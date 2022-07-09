import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SubHeader = () => {
  const menuData = [
    {
      name :'Home',
      to : "/"
    },
    {
      name :'About_us',
      to : "/about_us"
    },
    {
      name :'Services',
      to : "/services"
    },
  ];
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src='/images/logo.png' className='mainLogo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                menuData.map((e) => {
                  return <Nav.Link> <Link className="headerMenu" to={e.to}>{e.name}</Link> </Nav.Link>
                })
              }           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};
export default SubHeader;

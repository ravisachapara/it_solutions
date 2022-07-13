import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SubHeader = () => {
  const [menuIndex, setMenuIndex] = React.useState(0)
  
  const menuData = [
    {
      name :'Home',
      to : "/",
      index : 0
    },
    {
      name :'About_us',
      to : "/about_us",
      index : 1
    },
    {
      name :'Services',
      to : "/services",
      index : 2
    },
    {
      name :'Contact Us',
      to : "/contact_us",
      index : 3
    },
  ];
  
  const setActive = (e) => {
    setMenuIndex(e)
  }
  
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src='/images/logo-3.png' className='mainLogo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                menuData.map((e,index) => {
                  return <Nav.Link> <Link className={"headerMenu " + ( e.index === menuIndex ? 'headerMenu_active' : '')} onClick={ () => setActive(e.index) } to={e.to}>{e.name}</Link> </Nav.Link>
                })
                // headerMenu headerMenu_active"
              }           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};
export default SubHeader;

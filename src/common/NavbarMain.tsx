import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap"
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeThemeLanguage, lang } from './languageSlice';
function NavbarMain() {

  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch()

  const languageChange = (eventkey:any) => {
    // a.persist();
   // alert(`you chosen: ${eventkey}`);

        i18n.changeLanguage(eventkey);
        dispatch(changeThemeLanguage(eventkey))
  };
  const lng = useAppSelector(lang)
  
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark"  fixed="top" 
        expand="lg"
        >
        <Container fluid>
          <Navbar.Brand href="/">Kranjski Vrtci</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
         
            <LinkContainer to="/">
              <Nav.Link >{t('navbar.dashboard')}</Nav.Link>
            </LinkContainer>  

            <LinkContainer to="menu">
              <Nav.Link >{t('navbar.menu')}</Nav.Link>
            </LinkContainer>  

            <LinkContainer to="food">
              <Nav.Link >{t('navbar.food')}</Nav.Link>
            </LinkContainer> 

            <LinkContainer to="ingredients">
              <Nav.Link >{t('navbar.ingredients')}</Nav.Link>
            </LinkContainer> 

            <LinkContainer to="operations">
              <Nav.Link >{t('navbar.operations')}</Nav.Link>
            </LinkContainer> 

            <LinkContainer to="inventory">
              <Nav.Link >{t('navbar.inventory')}</Nav.Link>
            </LinkContainer> 
            
            <LinkContainer to="deliveries">
              <Nav.Link >{t('navbar.deliveries')}</Nav.Link>
            </LinkContainer> 
              
            </Nav>
            
            
              <Dropdown  onSelect={languageChange}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {lng}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey='sl'>sl</Dropdown.Item>
                <Dropdown.Item eventKey='en'>en</Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
}

export default NavbarMain;
import React, {useState, useEffect} from 'react' // ES6
import styles from '../styles/NavbarComp.module.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import Link from 'next/link'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom'

// import Home from ''
import Contact from '../pages/contact'
import Cart from '../pages/cart'
import Music from '../pages/inventories/music'
import Sports from '../pages/inventories/sports'
import Arduino from '../pages/inventories/tech/arduino'
import BroadBand from '../pages/inventories/tech/broad_band'
import MicroControl from '../pages/inventories/tech/microcontrolers'
import Sensor from '../pages/inventories/tech/sensors'


function NavbarComp(){
  return (
          <div className='App'>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Link href="/"><Navbar.Brand className={styles.host}>Learners <span className={styles.span}>Space</span></Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link href="/"><Nav.Link className={styles.bar_item} as="a" href="/">Home</Nav.Link></Link>
                  <Link href="/inventories/music"><Nav.Link className={styles.bar_item} as="a" href="/inventories/music">Music</Nav.Link></Link>
                  <Link href="/inventories/sports" ><Nav.Link className={styles.bar_item} as="a" href="/inventories/sports">Sports</Nav.Link></Link>
                  <NavDropdown className={styles.bar_item} bg="dark" variant="dark" title="Tech" id="basic-nav-dropdown">
                    <Link href="/inventories/tech/arduino"><NavDropdown.Item as="a" href="/inventories/tech/arduino">Arduino</NavDropdown.Item></Link>
                    <Link href="/inventories/tech/broad_band">
                      <NavDropdown.Item as="a" href="/inventories/tech/broad_band">
                        Broad Band
                      </NavDropdown.Item>
                    </Link>
                    <Link href="/inventories/tech/microcontrolers" ><NavDropdown.Item as="a" href="/inventories/tech/microcontrolers">Micro Controllers</NavDropdown.Item></Link>
                    <Link href="/inventories/tech/sensors">
                      <NavDropdown.Item as="a" href="/inventories/tech/sensors">
                        Sensors
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                  <Link href="/contact"><Nav.Link className={styles.bar_item} as="a" href="/contact">Contact</Nav.Link></Link>
                  <Link href="/cart"><Nav.Link className={styles.bar_item} as="a" href="/cart">Cart</Nav.Link></Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
      );
}

export default NavbarComp 
// element={<Cart list={list} total={totalCost}/>}
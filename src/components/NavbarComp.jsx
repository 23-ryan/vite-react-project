import React from 'react' // ES6
import './NavbarComp.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import Cart from './Cart'
import Music from './inventories/music'
import Sports from './inventories/sports'
import Arduino from './inventories/tech/arduino'
import BroadBand from './inventories/tech/broad-band'
import MicroControl from './inventories/tech/microcontrolers'
import Sensor from './inventories/tech/sensors'


function NavbarComp(){
  return (
      <Router>
          <div classsName="App">
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand className="host" as={Link} to={"/"}>Learners <span>Space</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link className="bar-item" as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link className="bar-item" as={Link} to={"/inventories/Music"}>Music</Nav.Link>
                  <Nav.Link className="bar-item" as={Link} to={"/inventories/Sports"}>Sports</Nav.Link>
                  <NavDropdown className="bar-item" bg="dark" variant="dark" title="Tech" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/inventories/tech/arduino"}>Arduino</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/inventories/tech/broad-band"}>
                      Broad Band
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/inventories/tech/microcontroler"}>Micro Controllers</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/inventories/tech/sensors"}>
                      Sensors
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="bar-item" as={Link} to={"/Contact"}>Contact</Nav.Link>
                  <Nav.Link className="bar-item" as={Link} to={"/Cart"}>Cart</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
          <div>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/Cart" element={<Cart />}/>
                  <Route path="/Contact" element={<Contact />}/>
                  <Route path="/inventories/music" element={<Music />}/>
                  <Route path="/inventories/sports" element={<Sports />}/>
                  <Route path="/inventories/tech/arduino" element={<Arduino />}/>
                  <Route path="/inventories/tech/broad-band" element={<BroadBand />}/>
                  <Route path="/inventories/tech/microcontroler" element={<MicroControl />}/>
                  <Route path="/inventories/tech/sensors" element={<Sensor />}/>
              </Routes>
          </div>
        </Router>
      );
}

export default NavbarComp 

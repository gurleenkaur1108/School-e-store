import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import 'font-awesome/css/font-awesome.min.css';
import { Container} from '@material-ui/core';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./styles.css";  
function MyNavbar()
{
  const[winWidth,setWidth]=useState(window.innerWidth);
 useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
}
    window.addEventListener('resize', handleResize)
  })
return (<div>
<Navbar expand="lg" className="colorNav">
<Container className="pr-0">
{(winWidth>991)&&(<div className="myToggle">  
  <img src="#" className="Imagestyle"/>
    <Nav className="me-auto">
    <div style={{marginLeft:"100px",marginTop:"4px",color:"black"}}>
    <Nav.Link to="#link" className="tag">About  </Nav.Link>
    <Nav.Link to="#link" className="tag">Pricing</Nav.Link>    
    <Nav.Link to="#link" className="tag">Contact</Nav.Link>
    </div>
    <div className="button">
    <button size="md" className="custom_but1">Log-In
      {/* <Link to="#">Log-In</Link> */}
    </button>
    <button size="md" className="custom_but2">Sign-Up
      {/* <Link to="/signup">Sign-Up</Link> */}
    </button>
    </div>
    </Nav>
  </div>)
    }    
  {(winWidth<=991)&&(<div>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <div className="myToggle">  
  <img src="#" className="Imagestyle"/>
  <div className="button">
    <Button variant="outline-dark" size="md" className="custom_but1">Log-In
      {/* <Link to="/login">Log-In</Link> */}
    </Button>
    <Button variant="outline-dark" size="md" className="custom_but2">Sign-Up
      {/* <Link to="/signup">Sign-Up</Link> */}
    </Button>
  </div>
  <Navbar.Collapse id="basic-navbar-nav" className="drop_sym">
    <Nav className="me-auto">
    <Nav.Link to="#link" style={{marginTop:"10px"}}>About  </Nav.Link>
    <Nav.Link to="#link">Pricing</Nav.Link>    
    <Nav.Link to="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
  </div>)}
</Container>
</Navbar>
<div class="line"></div>
</div>);
}
export default MyNavbar;
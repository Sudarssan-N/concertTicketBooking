import { Component } from 'react'
import {Nav,Navbar,Button,Container,Form,Dropdown} from 'react-bootstrap'
import {BrowserRouter , useNavigate} from 'react-router-dom'


 export default function NavbarComp()  {

  const navigate = useNavigate();

     return (
       <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">
                <img
                    src="../images/logo.jpg"
                    className="rounded float-left"
                    height="75"
                    width="75"
                    alt='Brand logo'
                    ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Button  onClick={()=>navigate('/signup')}>Signup</Button>&nbsp;
                <Button bg="red" onClick={()=>navigate('/signin')}>SignIn</Button>&nbsp
            </Nav>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search Events"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-warning">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
       </div>
     )
 }
 
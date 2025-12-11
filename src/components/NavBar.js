import { useState, useEffect } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import logo from "../assets/img/white_logo.png";
import linkedin from '../assets/img/linkedin.jpeg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false); //scroll changes the transparency of home
    
    useEffect(() => {
        const onScroll = () => { //function that will be called when the user scrolls, and determines behavior upon scrolling
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
        <Navbar expand="lg" className= {scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" 
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('home')}>
                        home
                </Nav.Link>
                <Nav.Link href="#about" 
                    className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('about')}>
                        about
                </Nav.Link>
                <Nav.Link href="#skills" 
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('skills')}> 
                        skills
                </Nav.Link>
                <Nav.Link href="#projects" 
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('project')}>
                        projects
                </Nav.Link>
                <Nav.Link href="#experiences" 
                    className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('experiences')}>       
                        experiences
                </Nav.Link>

            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
                <a href="#contact" className="vvd" onClick={() => console.log('Connect clicked')}>
                    <span>let’s connect! </span>
                </a>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
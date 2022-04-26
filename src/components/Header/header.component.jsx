import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import './header.styles.css';
const reset = () =>{
    window.location.reload();
}
const Header = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><Link to="/">PathFinding Visualizer</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                    <LinkContainer to="/PathVisualizer/a-star"><NavDropdown.Item >A*</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/PathVisualizer/bfs"><NavDropdown.Item >BFS</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/PathVisualizer/dfs"><NavDropdown.Item >DFS</NavDropdown.Item></LinkContainer>
                    
                    
                    
                    
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link onClick={reset}>Clear</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;
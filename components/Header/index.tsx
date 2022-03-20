import { Nav, Navbar } from "react-bootstrap";
// import styles from "./styles.module.scss";

const Header = () => (
   <header>
      <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="/">
            Next App
         </Navbar.Brand>
         <Nav.Link>Posts</Nav.Link>
         <Nav.Link>About</Nav.Link>
      </Navbar>
   </header>
)

export default Header;
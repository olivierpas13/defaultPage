import { NavBar } from './NavbarStyles';
import { Logo } from '../headerStyles';

const Navbar = () => {
  return (
    <>
      <Logo>
        <h1>
          <span>
          PURPLE
          </span>
           PAGE</h1>
      </Logo>
      <NavBar>
        <ul className="navBar">
          <a href="#">
            <li>ABOUT US</li>
          </a>
          <a href="#">
            <li>SERVICES</li>
          </a>
          <a href="#">
            <li>CONTACT US</li>
          </a>
          <a href="#">
            <li>UBICATION</li>
          </a>
        </ul>
      </NavBar>
    </>
  );
};

export default Navbar;

import { NavBar } from './NavbarStyles';
import favicon from './favicon.png';

const Navbar = () => {
  return (
    <>
      <span>
        <img src={favicon} alt="123" />
      </span>
      {/* <h1>
        Your Page Title
      </h1> */}
      <NavBar>
        <ul className="navBar">
          <a href="#">
            <li>demo</li>
          </a>
          <a href="#">
            <li>demo</li>
          </a>
          <a href="#">
            <li>demo</li>
          </a>
          <a href="#">
            <li>demo</li>
          </a>
        </ul>
      </NavBar>
    </>
  );
};

export default Navbar;

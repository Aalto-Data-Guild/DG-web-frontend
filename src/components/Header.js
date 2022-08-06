import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img alt="small logo" src="./DG_logo_clean_white.png" id="small_logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/newstudents">New Students</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <img alt="instagram logo" src="./White IG Logo 1.png" id="logo" />
        </li>
        <li>
          <img alt="linkedin logo" src="./White LI Logo 1.png" id="logo" />
        </li>
        <li>
          <img
            alt="telegram logo"
            src="./White Telegram Logo 1.png"
            id="logo"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;

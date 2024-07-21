import { Link } from "react-router-dom";
import "../../styles/NavLink.css";
const NavLink = (props) => {
  return (
    <Link
      className="nav-links"
      onClick={props.onClick}
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {props.text}
    </Link>
  );
};

export default NavLink;

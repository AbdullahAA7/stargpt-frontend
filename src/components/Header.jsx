import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";
import { Link } from "react-router-dom";
const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn && auth?.user ? (
            <>
              <NavLink
                bg="#00fffc"
                to="/chat"
                text="Go to chat"
                textColor="black"
              />

              <NavLink
                bg="#51538f"
                to="/"
                text="Logout"
                textColor="white"
                onClick={auth?.logout}
              >
                <Link onClick={window.location.reload()} />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />

              <NavLink
                bg="#51538f"
                to="/signup"
                text="Signup"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

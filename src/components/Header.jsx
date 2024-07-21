import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";
import "../styles/Header.css";
const Header = () => {
  const auth = useAuth();

  return (
    <AppBar className="Header">
      <Toolbar className="navbar">
        <Logo className="logo" />
        <div className="space"></div>
        <div className="btns">
          {auth?.isLoggedIn && auth?.user ? (
            <>
              <NavLink bg="#00fffc" to="/chat" text="Chats" textColor="black" />

              <NavLink
                bg="#51538f"
                to="/"
                text="Logout"
                textColor="white"
                onClick={auth?.logout}
              />
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

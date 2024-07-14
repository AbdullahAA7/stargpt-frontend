import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";
import { useState } from "react";

const Header = () => {
  const auth = useAuth();
  const [newAuth, setNewAuth] = useState(null);
  setNewAuth(auth);
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {newAuth?.isLoggedIn && newAuth?.user ? (
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
                onClick={auth.logout}
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

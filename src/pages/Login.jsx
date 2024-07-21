import { Box, Button, Typography } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import { useEffect } from "react";
import Input from "../components/shared/Input";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      toast.loading("Signning in.......", { id: "signup" });
      await auth?.login(email, password);
      toast.success("Signed In Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing  In Failed", { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);
  return (
    <Box className="Login">
      <Box className="robot-box">
        <img src="robott.png" alt="AI Robot" draggable="false" />
      </Box>
      <div className="space"></div>
      <Box className="login-form">
        <form onSubmit={handleSubmit}>
          <Box className="form-box">
            <Typography className="heading">Login</Typography>
            <Input
              type="email"
              name="email"
              label="Email"
              className="input-box"
            />
            <br />
            <Input
              type="Password"
              name="password"
              label="Password"
              className="input-box"
            />
            <br />
            <Button type="submit" endIcon={<IoIosLogIn />} className="btn">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

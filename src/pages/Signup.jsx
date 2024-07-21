import { Box, Button, Typography } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import { useEffect } from "react";
import Input from "../components/shared/Input";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      toast.loading("Signing Up.......", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      toast.error(`Sign up Failed Because ${error.message}`, { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);
  return (
    <Box className="Signup">
      <Box className="robot-box">
        <Box className="robot-img">
          <img src="airobot.png" alt="AI Robot" draggable="false" />
        </Box>
      </Box>
      <div className="space"></div>
      <Box className="signup-form">
        <form onSubmit={handleSubmit}>
          <Box className="form-box">
            <Typography className="heading">Signup</Typography>
            <Input type="text" name="name" label="Name" className="input-box" />
            <br />
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
              SignUp
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;

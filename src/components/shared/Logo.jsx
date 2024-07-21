import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "../../styles/Logo.css";
const Logo = () => {
  return (
    <div className="Logo">
      <Link to={"/"}>
        <img src="openai.png" alt="OpenAi" className="logo-img" />
      </Link>
      <Typography className="text">StarGPT</Typography>
    </div>
  );
};

export default Logo;

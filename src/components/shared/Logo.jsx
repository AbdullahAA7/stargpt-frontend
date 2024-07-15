import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="OpenAi"
          width={"30px"}
          height={"30px"}
          className="logo"
        />
      </Link>
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "500",
          fontSize: "23px",
          color: "rgba(216, 216, 216,0.9)",
          textShadow: "2px 2px 20px #000",
        }}
      >
        StarGPT
      </Typography>
    </div>
  );
};

export default Logo;

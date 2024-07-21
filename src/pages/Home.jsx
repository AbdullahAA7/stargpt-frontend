import { Box } from "@mui/material";
import "../styles/Home.css";
const Home = () => {
  return (
    <Box className="Home">
      <div className="container">
        <Box className="Models">
          <div className="pics">
            <Box className="robot">
              <img src="robot.png" alt="Robot" />
              <div className="space"></div>
              <img className="logo rotate" src="openai.png" alt="Openai" />
            </Box>
          </div>

          <Box className="chat">
            <h3>Login/Singup for interacting with model like this:</h3>
            <img src="chat.png" alt="ChatImage" />
          </Box>
        </Box>
        <div className="footer">
          <p>
            StarGpt private Limited&copy; By <h4>Abdullah A.A</h4>{" "}
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Home;

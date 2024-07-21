import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../../styles/ChatItem.css";

function getCodeFromString(message) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("//") ||
    str.includes("#") ||
    str.includes("*") ||
    str.includes("**")
  ) {
    return true;
  }
  return false;
}

const ChatItem = ({ content, role }) => {
  const messageBlock = getCodeFromString(content);
  const auth = useAuth();
  return role === "model" ? (
    <Box
      sx={{
        bgcolor: "#004d5612",
      }}
      className="ChatItem"
    >
      <Avatar className="avtar">
        <img src="openai.png" alt="OPEN_AI" width={"30px"} />
      </Avatar>
      <Box className="msg">
        {!messageBlock && (
          <Typography className="msg-text" sx={{ color: "white" }}>
            {content}
          </Typography>
        )}

        {messageBlock &&
          messageBlock.length &&
          messageBlock.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkDark}
                language={block.split(" ")[0]}
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} sx={{ color: "white" }}>
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        bgcolor: "#004d56",
      }}
      className="ChatItem"
    >
      <Avatar sx={{ bgcolor: "black" }} className="avtar">
        {auth?.user?.name[0]}
      </Avatar>
      <Box className="msg">
        {!messageBlock && (
          <Typography className="msg-text" sx={{ color: "white" }}>
            {content}
          </Typography>
        )}

        {messageBlock &&
          messageBlock.length &&
          messageBlock.map((block, index) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter
                key={index}
                style={coldarkDark}
                language={block.split(" ")[0]}
              >
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography key={index} sx={{ color: "white" }}>
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  );
};

export default ChatItem;

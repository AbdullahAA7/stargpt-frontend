import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/Chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  sendAllChats,
  sendChatRequest,
  deleteUserChats,
} from "../helpers/ApiHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../styles/Chat.css";
const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const auth = useAuth();
  const [chatMessage, setChatMessage] = useState([]);

  const handleSubmit = async () => {
    const content = inputRef.current?.value;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage = { role: "user", content };
    setChatMessage((previous) => [...previous, newMessage]);

    const chatData = await sendChatRequest(content);
    setChatMessage([...chatData.chats]);
  };

  const handleDeletion = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deleteChats" });
      await deleteUserChats();
      setChatMessage([]);
      toast.success("Chats Deleted Successfully", { id: "deleteChats" });
    } catch (error) {
      console.log(error);
      toast.error("Deleting Chats Failed", { id: "deleteChats" });
    }
  };
  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadChats" });
      sendAllChats()
        .then((data) => {
          setChatMessage([...data.chats]);
          toast.success("Successfully loaded Chats", { id: "loadChats" });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Loading failed ", { id: "loadChats" });
        });
    }
  }, [auth]);
  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login");
    }
  }, [auth]);

  return (
    <Box className="Chat">
      <Box
        sx={{
          bgcolor: "rgb(17,29,39)",
        }}
        className="intro-section"
      >
        <Typography className="information">
          {" "}
          <Avatar className="avatar">{auth?.user?.name[0]}</Avatar>
          <p> You are Talking to a ChatBot created by</p>
          <p>
            <span className="author">Abdullah A.A </span>
            Using
            <span>
              {" "}
              <span style={{ color: "#4285f4", fontWeight: "bold" }}>G</span>
              <span style={{ color: "#ea4335", fontWeight: "bold" }}>o</span>
              <span style={{ color: "#fbbc04", fontWeight: "bold" }}>o</span>
              <span style={{ color: "#4285f4", fontWeight: "bold" }}>g</span>
              <span style={{ color: "#34a853", fontWeight: "bold" }}>l</span>
              <span style={{ color: "#ea4335", fontWeight: "bold" }}>
                e
              </span>{" "}
              <span style={{ color: "#1683fd", fontWeight: "bold" }}>G</span>
              <span style={{ color: "#248df9", fontWeight: "bold" }}>e</span>
              <span style={{ color: "#9f87ec", fontWeight: "bold" }}>m</span>
              <span style={{ color: "#b57ed6", fontWeight: "bold" }}>i</span>
              <span style={{ color: "#d2679c", fontWeight: "bold" }}>n</span>
              <span style={{ color: "#e6536d", fontWeight: "bold" }}>
                i
              </span>{" "}
              Api
            </span>
          </p>
        </Typography>
        <Typography className="ablities">
          You can ask a lots of questions related to Programming, Knowledge,
          Business, Advice, Education etc, What ever you Want! But avoid sharing
          personal information and do not try to ask any type of adult/sexual
          conent if you ask about these topics the model will stop working or
          responding.{" "}
        </Typography>
        <Button onClick={handleDeletion} className="btn">
          Clear Chats
        </Button>
      </Box>

      <Box className="output-section">
        <Typography className="model-text">
          <b style={{ fontSize: "1.2rem" }}>
            <span style={{ color: "#1683fd", fontWeight: "bold" }}>S</span>
            <span style={{ color: "#248df9", fontWeight: "bold" }}>t</span>
            <span style={{ color: "#9f87ec", fontWeight: "bold" }}>a</span>
            <span style={{ color: "#b57ed6", fontWeight: "bold" }}>r</span>
            <span style={{ color: "#d2679c", fontWeight: "bold" }}>G</span>
            <span style={{ color: "#e6536d", fontWeight: "bold" }}>P</span>
            <span style={{ color: "#e6539c", fontWeight: "bold" }}>T</span>
          </b>
          : {auth?.user?.name}! How can i help you today?
        </Typography>
        <Box className="outputbox">
          {chatMessage.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            backgroundColor: "rgb(17, 27, 39)",
          }}
          className="input-box"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Feel free to ask anything Here!"
          />
          <IconButton onClick={handleSubmit} className="icon-box">
            <IoMdSend />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;

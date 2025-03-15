import React, { useState } from "react";
import { Assistant } from "./assistants/googleai";
import style from "./App.module.css";
import Chat from "./component/Chat/Chat";
import { Controls } from "./component/Control/Controls";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    try {
      const result = await assistant.chat(content);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request",
        role: "assistant",
      });
    }
  }
  return (
    <div className={style.App}>
      <header className={style.Header}>
        <img className={style.Logo} src="/chatbot.jpg" />
        <h2 className={style.Title}>AI Chatbot</h2>
      </header>
      <div className={style.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;

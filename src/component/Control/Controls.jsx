import { useState } from "react";
import sendIcon from "../../../public/sendIcon.svg";
import styles from "./Controls.module.css";

export function Controls({ onSend }) {
  const [content, setContent] = useState("");

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }
  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <input
          className={styles.TextArea}
          placeholder="Message AI chatbot"
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        />
      </div>
      <button className={styles.Button} onClick={handleContentSend}>
        <SendIcon />
      </button>
    </div>
  );
}

export function SendIcon() {
  return (
    <div>
      <img src={sendIcon} alt="send svg" />
    </div>
  );
}

import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

function MessageForm(props) {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        value={value}
        placeholder="Send a message...."
        onChange={(e) => {
          setValue(e.target.value);
          isTyping(props, chatId);
        }}
      />

      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
}

export default MessageForm;

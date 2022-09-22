import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const hanldeSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "7f5982fd-f5e5-4992-86ad-03b5fef07807",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Incorrect username or password, try again!");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Box</h1>
        <form onSubmit={hanldeSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
          <h4 className="error">{error}</h4>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

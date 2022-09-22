import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="7f5982fd-f5e5-4992-86ad-03b5fef07807"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppFeed) => <ChatFeed {...chatAppFeed} />}
      />
    </>
  );
}

export default App;

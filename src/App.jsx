import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="7f5982fd-f5e5-4992-86ad-03b5fef07807"
        userName="Everybody"
        userSecret="123456"
        renderChatFeed={(chatAppFeed) => <ChatFeed {...chatAppFeed} />}
      />
    </>
  );
}

export default App;

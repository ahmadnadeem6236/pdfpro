import ChatArea from "./components/ChatArea";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" flex flex-col h-screen">
      <div className=" flex flex-[0.1]">
        <Navbar />
      </div>
      <div className=" flex flex-[0.9] rounded-md items-end px-16">
        <ChatArea />
      </div>
    </div>
  );
}

export default App;

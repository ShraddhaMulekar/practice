import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Chat from "./components/Chat";
import History from "./components/History";
import Message from "./components/Message";
import Upload from "./components/Upload";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/history" element={<History />} />
          <Route path="/message" element={<Message />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

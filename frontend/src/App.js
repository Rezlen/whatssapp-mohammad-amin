import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // in React version 18.2.0
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
//import { Button } from "@chakra-ui/react"; // provides some UI components.


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;

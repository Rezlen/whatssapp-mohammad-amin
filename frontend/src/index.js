import React from 'react';
import ReactDOM from 'react-dom/client'; // for react version 18.2.0
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"; // provides some UI components.
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom"; // for react version 18.2.0


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      
        <ChatProvider>
          <App />
        </ChatProvider>
      
    </ChakraProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

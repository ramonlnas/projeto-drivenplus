import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Subscriptions from "./components/Subscriptions";
import { AuthContextProvider } from "./context/AuthContext";
import Assinar from "./components/Assinar/Assinar";
import Home from "./components/Home";



export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/assinar/:idSubs" element={<Assinar />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

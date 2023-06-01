
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import NotFound from "./components/NotFound/index";
import Login from "./components/Login/index";
import Profile from "./components/Produtos/index";
import Help from "./components/Help/index";
import Works from "./components/Contato/index";
import Register from "./components/Register/index";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="works" element={<Works />} />
      <Route path="help" element={<Help />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

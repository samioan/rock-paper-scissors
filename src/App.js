import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  SplashPage,
  CreateGame,
  JoinGame,
  GamePage,
} from "./components/routes";
import { Footer } from "./components/library";

import "./App.css";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="create-game" element={<CreateGame />} />
        <Route path="join-game" element={<JoinGame />} />
        <Route path="game-page" element={<GamePage />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;

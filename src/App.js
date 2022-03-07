import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SplashPage, JoinGame, GamePage } from "./components/routes";
import { Footer } from "./components/library";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="general-splash-container">
                <SplashPage />
              </div>
            }
          />

          <Route
            path="join-game"
            element={
              <div className="general-join-game-container">
                <JoinGame />
              </div>
            }
          />
          <Route
            path="game-page"
            element={
              <div className="general-game-page-container">
                <GamePage />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

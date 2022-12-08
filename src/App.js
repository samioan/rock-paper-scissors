import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import store from "models/store";
import { Home, Game } from "routes";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import { Provider } from "react-redux";

import App from "./App.jsx";

import "./index.css";
import store from "./redux/app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

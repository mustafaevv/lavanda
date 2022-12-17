import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import GlobeStyle from "./GlobeStyle";
import store from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobeStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

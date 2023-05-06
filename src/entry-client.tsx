import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import I18nProvider from "providers/I18nProvider";

ReactDOM.hydrate(
  <I18nProvider><App/></I18nProvider>,
  document.getElementById("snowrunnerRoot")
);

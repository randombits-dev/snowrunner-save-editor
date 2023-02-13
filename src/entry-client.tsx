import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import {GlobalStyle} from "providers/GlobalStyle";
import I18nProvider from "providers/I18nProvider";

ReactDOM.hydrate(
  <I18nProvider><GlobalStyle/><App/></I18nProvider>,
  document.getElementById("snowrunnerRoot")
);

import App from "App";
import I18nProvider from "providers/I18nProvider";
import {hydrateRoot} from "react-dom/client";

hydrateRoot(
  document.getElementById("snowrunnerRoot"),
  <I18nProvider><App/></I18nProvider>
);

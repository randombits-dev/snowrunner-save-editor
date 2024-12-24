import App from "App";
import I18nProvider from "providers/I18nProvider";
import {createRoot} from "react-dom/client";
// import './dev.scss';

createRoot(document.getElementById("snowrunnerRoot"))
  .render(<I18nProvider><App/></I18nProvider>);

import App from "App";
import React from 'react';
import {createRoot, Root} from "react-dom/client";
import I18nProvider from "providers/I18nProvider";
import {GlobalStyle} from "providers/GlobalStyle";

if (!window.customElements.get('randombits-snowrunner')) {
  class ExternalApp extends HTMLElement {
    private reactRoot: Root = null;

    connectedCallback() {
      this.reactRoot = createRoot(this);
      this.reactRoot.render(<I18nProvider><GlobalStyle/><App/></I18nProvider>);
    }

    disconnectedCallback() {
      setTimeout(() => {
        this.reactRoot.unmount();
        this.reactRoot = null;
      })

    }
  }

  window.customElements.define('randombits-snowrunner', ExternalApp);
}

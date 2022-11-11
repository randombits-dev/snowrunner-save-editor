import type {AppProps} from 'next/app';
import {GlobalStyle} from '../providers/GlobalStyle';
import MultiThemeProvider from "../providers/MultiThemeProvider";
import {DialogProvider} from "../providers/DialogProvider";
import I18nProvider from "../providers/I18nProvider";

function NextWeb3App({Component, pageProps}: AppProps) {
  return (
    <MultiThemeProvider>
      <GlobalStyle></GlobalStyle>
      <DialogProvider>
        <I18nProvider>
          <Component {...pageProps} />
        </I18nProvider>
      </DialogProvider>
    </MultiThemeProvider>
  );
}

export default NextWeb3App;

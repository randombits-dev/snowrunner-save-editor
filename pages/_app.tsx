import type {AppProps} from 'next/app';
import {DebugProvider} from '../providers/DebugProvider';
import {GlobalStyle} from '../providers/GlobalStyle';
import MultiThemeProvider from "../providers/MultiThemeProvider";
import {DialogProvider} from "../providers/DialogProvider";
import I18nProvider from "../providers/I18nProvider";

function NextWeb3App({Component, pageProps}: AppProps) {
  return (
    <DebugProvider>
      <MultiThemeProvider>
        <GlobalStyle></GlobalStyle>
        <DialogProvider>
          <I18nProvider>
            <Component {...pageProps} />
          </I18nProvider>
        </DialogProvider>
      </MultiThemeProvider>
    </DebugProvider>
  );
}

export default NextWeb3App;

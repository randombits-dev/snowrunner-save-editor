import I18nProvider from "providers/I18nProvider";
import {GlobalStyle} from "providers/GlobalStyle";
import App from "App";

import * as fs from 'fs';
import * as path from 'path';
import {renderToString} from "preact-render-to-string";

const result = renderToString(<I18nProvider><GlobalStyle/><App/></I18nProvider>);

const outFile = path.resolve(__dirname, 'remote.html');
const data = fs.readFileSync(outFile, {encoding: 'utf8'});
fs.writeFileSync(outFile, data.replace('{{body}}', result), {encoding: 'utf8'});

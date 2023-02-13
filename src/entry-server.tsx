import I18nProvider from "providers/I18nProvider";
import {GlobalStyle} from "providers/GlobalStyle";
import App from "App";

import * as fs from 'fs';
import * as path from 'path';
import {renderToString} from "preact-render-to-string";

const result = renderToString(<I18nProvider><GlobalStyle/><App/></I18nProvider>);

const outFile = path.resolve(__dirname, 'remote.html');
const data = fs.readFileSync(outFile, {encoding: 'utf8'});
fs.writeFileSync(outFile, data.replace('<!--body-->', result));
//
// const html = `
//     <html><body><div id="snowrunnerRoot">${result}</div><script type="module" src="/assets/index-59b557bb.js"></script></body></html>
// `;
// fs.writeFileSync(outFile, html, {encoding: 'utf8'});

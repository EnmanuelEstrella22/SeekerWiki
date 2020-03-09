import React from "react";
import ReactDOM from "react-dom";
import SeekerWiki from './pages/apiWikipedia';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<SeekerWiki />, document.getElementById("root"));
serviceWorker.unregister();

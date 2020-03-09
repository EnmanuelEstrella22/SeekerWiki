import React from "react";
import ReactDOM from "react-dom";
import WikiSearch from './pages/apiWikipedia';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<WikiSearch />, document.getElementById("root"));
serviceWorker.unregister();

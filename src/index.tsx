import * as React from "react";
import * as ReactDOM from "react-dom";

import { Layout } from "./components/Layout";
import { Movies } from "./components/movies/movies";
import { Characters } from "./components/characters/characters";
// const hashHistory={};

const app = document.getElementById("example");

ReactDOM.render(<Layout welcomeProp="" shoutOutProp=""/>, app);

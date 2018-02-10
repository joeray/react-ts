import * as React from "react";
import * as ReactDOM from "react-dom";

import { Layout } from "./components/Layout";

const app = document.getElementById("example");

ReactDOM.render(<Layout welcomeProp="string to show" shoutOutProp="shoutout to show" />, app);

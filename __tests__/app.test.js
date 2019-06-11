import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "../src/components/Layout";
import { Movies } from "../src/components/movies/Movies";
import { Player } from "../src/components/player/Player";
import { Search } from "../src/components/search/Search";
describe("load basic components", () => {
  it("renders layout without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Layout />, div);
  });

  it("renders movies without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Movies />, div);
  });

  it("renders player without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Player />, div);
  });

  it("renders search without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search />, div);
  });
});

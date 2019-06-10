import * as React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <NavLink
          exact={true}
          to={{
            pathname: `/`,
            state: { referrer: {} }
          }}
        >
          Home
        </NavLink>

        <NavLink
          exact={true}
          to={{
            pathname: `/search`,
            state: { referrer: {} }
          }}
        >
          Search
        </NavLink>
      </div>
    );
  }
}

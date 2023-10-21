import React from "react";
import ReactDom from "react-dom/client";
import "react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import React from "react";
import NavItems from "./NavItems";
import CardListItems from "./CardListItems";

const App = () => {
  return (
    <div>
      <NavItems />
      <CardListItems />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

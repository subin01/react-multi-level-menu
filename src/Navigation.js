import React from "react";
import NavItem from "./NavItem";

export default function Navigation({ data }) {
  return (
    <nav>
      Root
      <NavItem item={data} level="1" />
    </nav>
  );
}

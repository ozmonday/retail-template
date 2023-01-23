import React from "react";
import Footer from "./footer";
import Nav from "./navbar";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

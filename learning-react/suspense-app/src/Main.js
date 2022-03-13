import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const SiteLayout = ({
  children,
  menu = c => null
}) => {
  return (
    <div className="site-container">
      <div className="menu">{menu}</div>
      <div className="content">{children}</div>
    </div>
  );
}

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: "white" }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

const BreakThings = () => {
  throw new Error("We intentionally broke something");
}

export default function Main() {
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <Callout>Welcome to the site</Callout>
      <ErrorBoundary>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}


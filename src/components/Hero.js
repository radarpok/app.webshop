import React from "react";

export default function Hero({children}) {
  return <div className="hero">
    <div className="banner">
      <h1>see, learn, share</h1>
      <p>embrace your choices - we do</p>
      {children}
    </div>
  </div>;
}

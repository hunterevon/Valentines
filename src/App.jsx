import React from "react";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Will you be my Valentine?</h1>
      </header>
      <main className="main">
        <img src="/heath.jpeg" alt="photo" className="heath" />
        <div className="maindiv">
          <div className="buttons">
            <button className="yes">YES</button>
            <button className="no">NO</button>
          </div>
        </div>
      </main>
    </div>
  );
}

// import { useState } from 'react'
import "./App.css";
import { Navbar } from "./components";
import { Landing, Services } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
    </>
  );
}

export default App;

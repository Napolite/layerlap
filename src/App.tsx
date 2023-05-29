// import { useState } from 'react'
import "./App.css";
import { Navbar } from "./components";
import { Landing, Services, Help } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Help />
    </>
  );
}

export default App;

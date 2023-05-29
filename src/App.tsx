// import { useState } from 'react'
import "./App.css";
import { Navbar } from "./components";
import { Landing, Services, Help, Contact } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Help />
      <Contact />
    </>
  );
}

export default App;

// import { useState } from 'react'
import "./App.css";
import { Footer, Navbar } from "./components";
import { Landing, Services, Help, Contact } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Help />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

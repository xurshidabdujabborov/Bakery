import React from "react";
import Chef from "./components/Chef/Chef";
import Contact from "./components/Contact/Contact";
import Fetures from "./components/Fetures/Fetures";
import Footer from "./components/Footer/Footer";
import Fresh from "./components/Fresh/Fresh";
import People from "./components/People/People";
import Process from "./components/Process/Process";
import Video from "./components/Video/Video";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Fetures />
      <Video />
      <Fresh />
      <Process />
      <Chef />
      <People />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

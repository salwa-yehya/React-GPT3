import "./App.css";
import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";
import { Navbar, Article, Feature, CTA, Brand } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

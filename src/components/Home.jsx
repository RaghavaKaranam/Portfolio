import "../css/home.css";
import About from "./About";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}

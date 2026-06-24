import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Drinks from "./components/Drinks";
import Bakery from "./components/Bakery";
import PetZone from "./components/PetZone";
import ReadingLounge from "./components/ReadingLounge";
import Workspace from "./components/Workspace";
import PhotoBooth from "./components/PhotoBooth";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Drinks />
      <Bakery />
      <PetZone />
      <ReadingLounge />
      <Workspace />
      <PhotoBooth />
      <Events />
      <Reservation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
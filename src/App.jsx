import { BrowserRouter } from "react-router-dom";
import { About, Experience, Tech, Works, Navbar, Contact, Hero, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black text-white"> {/* Set background to black and text to white */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
        <About />
        <Experience />
        <Tech />
        <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

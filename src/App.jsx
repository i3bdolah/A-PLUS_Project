import "./App.css";
import {
  Nav,
  Hero,
  OurClient,
  Service,
  Project,
  Testimonials,
  Newsletter,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <OurClient />
      <Service />
      <Project />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;

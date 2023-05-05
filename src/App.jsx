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
    <main>
      <Nav />
      <Hero />
      <OurClient />
      <Service />
      <Project />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;

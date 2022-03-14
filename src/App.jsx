import Hero from "./components/Hero/Hero";
import Details from "./components/Details/Details";
import Inspiration from "./components/Inspiration/Inspiration";
import Recipes from "./components/Recipes/Recipes";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Details />
      <Inspiration />
      <Recipes />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

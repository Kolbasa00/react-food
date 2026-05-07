import { BrowserRouter as Router, Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Router basename="/react-food">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="max-w-7xl w-full mx-auto flex-1 py-7">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

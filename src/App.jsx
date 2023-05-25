import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Route, Routes, BrowserRouter as ReactRouter } from "react-router-dom";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ReactRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </ReactRouter>
  );
}

export default App;

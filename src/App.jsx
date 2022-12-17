import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

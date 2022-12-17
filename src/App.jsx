import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

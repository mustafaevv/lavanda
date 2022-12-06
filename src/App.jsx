import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

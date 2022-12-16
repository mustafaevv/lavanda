import React from "react";

import Banner from "../components/Banner";
import Comments from "../components/Comments";
import ProductItems from "../components/ProductItems";

const Home = () => {
  return (
    <main>
      <Banner />
      <ProductItems />
      <Comments />
    </main>
  );
};

export default Home;

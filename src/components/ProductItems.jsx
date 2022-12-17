import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../layout/Container";

import Product from "./Product";

const Section = styled.section`
  padding: 100px 0;
`;

const ProductContent = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  width: 100%;
`;

const ProductItems = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch("http://localhost:4000/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Section>
      <ProductContent>
        {data && data.map((item) => <Product key={item.id} data={item} />)}
      </ProductContent>
    </Section>
  );
};

export default ProductItems;

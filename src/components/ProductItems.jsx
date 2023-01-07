import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Container from "../layout/Container";
import Product from "./Product";
import axios from "axios";

const Section = styled.section`
  padding: 100px 0;
`;

const ProductContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  width: 100%;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const ProductItems = () => {
  const [data, setData] = useState(null);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    axios
      .get("https://63071da7c0d0f2b8012710af.mockapi.io/lavanda/")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <Section>
      <ProductContent>
        {data &&
          data.map((item) => (
            <Product key={item.id} data={item} select={item.id in cart} />
          ))}
      </ProductContent>
    </Section>
  );
};

export default ProductItems;

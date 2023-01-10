import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import Container from "../layout/Container";
import Product from "./Product";

const Section = styled.section`
  padding: 100px 0;
`;

const ProductContent = styled(Container)`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 5em;
  width: 100%;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;
// .get("https://63071da7c0d0f2b8012710af.mockapi.io/lavanda/")

const ProductItems = () => {
  const [data, setData] = useState(null);
  const { favorite: likeItem, cart } = useSelector((state) => state);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("http://localhost:4000/products");
  //     const cards = await data.json();
  //     setData(cards);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Section>
      <ProductContent>
        {data &&
          data.map((item) => (
            <Product
              key={item.id}
              data={item}
              like={item.id in likeItem}
              select={item.id in cart}
            />
          ))}
      </ProductContent>
    </Section>
  );
};

export default ProductItems;

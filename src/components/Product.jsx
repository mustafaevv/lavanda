import React, { useState } from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import item from "./productITem";

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

const ProductItem = styled.div`
  max-width: 300px;
  width: 100%;
`;

const ProductImg = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 1em;
`;

const ProductText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #17171a;
  line-height: 1.5;
  margin-bottom: 1em;
`;

const ProductBtn = styled.button`
  width: 100%;
  border: ${({ select }) => (select ? "1px solid #46972b" : "#fff ")};
  background: ${({ select }) => (select ? "#fff" : "#46972b ")};
  color: ${({ select }) => (select ? "#46972b" : "#fff ")};
  line-height: 50px;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
`;

const Product = () => {
  const [select, setSelect] = useState(false);
  const handleSelected = () => setSelect((state) => !state);

  return (
    <Section>
      <ProductContent>
        {item.map((item, index) => (
          <ProductItem key={index}>
            <ProductImg src={item.img} alt="" />
            <ProductText>{item.text}</ProductText>
            <ProductBtn select={select} onClick={handleSelected}>
              {select ? "added" : "add"}
            </ProductBtn>
          </ProductItem>
        ))}
      </ProductContent>
    </Section>
  );
};

export default Product;

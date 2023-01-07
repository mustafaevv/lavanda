import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../redux/cart";

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 250px;
  width: 100%;
  height: 500px;
`;

const ProductImg = styled.img`
  width: 100%;
  max-height: 300px;
  height: 100%;
  margin-bottom: 1em;
  /* object-fit: cover; */
  border-radius: 6px;
`;

const ProductText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #17171a;
  line-height: 1.5;
  margin-bottom: 0.5em;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const ProductBtn = styled.button`
  width: 100%;
  height: 50px;
  border: ${({ select }) => (select ? "3px solid #618a53" : "#f5f5ef ")};
  background: ${({ select }) => (select ? "#f5f5ef" : "#39672a ")};
  color: ${({ select }) => (select ? "#618a53" : "#f5f5ef ")};
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
  margin-top: auto;
`;

const Product = ({ data, select }) => {
  const dispatch = useDispatch();
  const handleSelected = () => {
    dispatch(select ? removeFromCart(data.id) : addToCart(data));
  };

  return (
    <ProductItem key={data.id}>
      <ProductImg src={data.img} alt="" />
      <ProductText>{data.text}</ProductText>
      <ProductPrice>{data.price} сум</ProductPrice>
      <ProductBtn select={select} onClick={handleSelected}>
        {select ? "added" : "add"}
      </ProductBtn>
    </ProductItem>
  );
};

export default Product;

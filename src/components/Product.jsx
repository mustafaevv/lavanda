import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../redux/cart";

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  height: 500px;
`;

const ProductImg = styled.img`
  width: 100%;
  max-height: 300px;
  height: 100%;
  margin-bottom: 1em;
  object-fit: cover;
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
  border: ${({ select }) => (select ? "2px solid #46972b" : "#fff ")};
  background: ${({ select }) => (select ? "#fff" : "#46972b ")};
  color: ${({ select }) => (select ? "#46972b" : "#fff ")};
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
  margin-top: auto;
`;

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  
  const handleSelected = () => {
    dispatch(select ? removeFromCart(data.id) : addToCart(data));
    setSelect((state) => !state);
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

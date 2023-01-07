import React from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { addOne, removeFromCart, removeOne } from "../redux/cart";

const Cart = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
`;

const Img = styled.img`
  width: 270px;
  height: 270px;
  margin-right: 15px;
  border-radius: 6px;
  object-fit: cover;
`;

const Name = styled.h6`
  font-size: 24px;
  font-weight: 600;
  color: #17171a;
  text-transform: capitalize;
  max-width: 500px;
  width: 100%;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #17171a;
  text-transform: capitalize;
  max-width: 500px;
  width: 100%;
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 150px;
  width: 100%;
`;

const Counter = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ControllerBtn = styled.button`
  border: 2px solid #46972b;
  width: 35px;
  height: 35px;
  background: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #17171a;
`;

const Price = styled.p`
  flex-grow: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Trash = styled.button`
  margin-left: auto;
  border: 2px solid #46972b;
  width: 35px;
  height: 35px;
  background: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #17171a;
`;

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleMinus = () => dispatch(removeOne(data.id));
  const handlePlus = () => dispatch(addOne(data.id));
  const handleClose = () => dispatch(removeFromCart(data.id));

  return (
    <Cart>
      <Img src={data.img} alt="" />
      <Name>{data.name}</Name>
      <Text>{data.text}</Text>
      <Controller>
        <ControllerBtn onClick={handleMinus}>
          <AiOutlineMinus />
        </ControllerBtn>
        <Counter>{data.quantity}</Counter>
        <ControllerBtn onClick={handlePlus}>
          <AiOutlinePlus />
        </ControllerBtn>
      </Controller>
      <Price>{data.price} сум</Price>
      <Trash onClick={handleClose}>
        <AiOutlineClose />
      </Trash>
    </Cart>
  );
};

export default CartItem;

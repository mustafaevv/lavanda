import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CartItem from "../components/CartItem";
import Title from "../components/Title";
import Container from "../layout/Container";

const Section = styled.section`
  padding: 70px 0;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const TotalItem = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-transform: capitalize;
`;

const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #000;
  text-transform: capitalize;
`;

const ButtonController = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  border: none;
  background: #46972b;
  max-width: 170px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const cartEmpty = items.length === 0;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Section>
      <Container>
        {cartEmpty ? (
          <Title />
        ) : (
          items.map((card) => <CartItem key={card.id} data={card} />)
        )}
        {!cartEmpty && (
          <Block>
            <TotalItem>count {count}</TotalItem>
            <TotalPrice>Сум {total}</TotalPrice>
          </Block>
        )}
        {!cartEmpty && (
          <ButtonController>
            <Button>send</Button>
          </ButtonController>
        )}
      </Container>
    </Section>
  );
};

export default Cart;

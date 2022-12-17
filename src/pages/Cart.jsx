import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../layout/Container";

const Section = styled.section`
  
`

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

      </Container>
    </Section>
  );
};

export default Cart;

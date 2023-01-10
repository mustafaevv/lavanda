import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Product from "../components/Product";
import Title from "../components/Title";
import Container from "../layout/Container";

const Section = styled.section`
  padding: 100px 0;
`

const FavoriteContainer = styled.div`
  display: flex;
  gap: 5em;
  align-items: center;
`;

const Favorite = () => {
  const { favorite: likeItem, cart: cartItems } = useSelector((state) => state);
  const items = Object.values(likeItem);

  return (
    <Section>
      {items.length ? (
        <Container>
          <Title>Favorite products</Title>
          <FavoriteContainer>
            {items.map((card) => (
              <Product
                key={card.id}
                data={card}
                like={card.id in likeItem}
                select={card.id in cartItems}
              />
            ))}
          </FavoriteContainer>
        </Container>
      ) : (
        <Title>You don't have favorite products😢</Title>
      )}
    </Section>
  );
};

export default Favorite;

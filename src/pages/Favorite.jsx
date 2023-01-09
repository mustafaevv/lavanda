import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Title from "../components/Title";
import Container from "../layout/Container";

const Favorite = () => {
  const { like, cart: cartItems } = useSelector((state) => state);
  const items = Object.values(like);

  return (
    <>
      {items.length ? (
        <Container>
          <Title>Favorite products</Title>
          {items.map((card) => (
            <Product
              key={card.id}
              data={card}
              liked={card.id in like}
              select={card.id in cartItems}
            />
          ))}
        </Container>
      ) : (
        <Title>You don't have favorite products😢</Title>
      )}
    </>
  );
};

export default Favorite;

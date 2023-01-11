import React from "react";
import styled from "styled-components";
import Container from "../layout/Container";
import { items } from "./aboutItem";

const Section = styled.section`
  padding: 100px 0;
`;

const Title = styled.h2`
  font-size: 26px;
  color: #000;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 1em;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 4em;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 45%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #000;
  font-weight: 400;

  & span {
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 500;
`;

const Block = styled.div`
  margin-top: 20px;
`;

const InfoItems = styled.div`
  display: flex;
  gap: 0.3em;
`;

const InfoLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  margin-bottom: 0.3em;
`;

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Title>о нас</Title>
        <Content>
          <Left>
            <Text>
              Компания <span> LAVANDA</span> является одним из качественних
              производителей моющих средств и бытовой химии. Наши главные
              ценности – чистота и постоянное движение вперед. С нами просто,
              чисто и выгодно! Немного о нашей Семье: - Компания
              <span> LAVANDA</span> создана в 2021 году. - Продукция компании
              представлена в каждом регионе Узбекистана. - Производительность
              компании составляет 20 тонн в сутки. - В компании работает
              профессиональных и высококвалифицированных сотрудников.
            </Text>
          </Left>
          <Right>
            <Info>Адрес: Ташкент г. Учтепинский район Фазилтепа 11</Info>
            <Block>
              {items.map((item, index) => (
                <InfoItems key={index}>
                  <p>{item.label}</p>
                  <InfoLink href={item.link}>{item.name}</InfoLink>
                </InfoItems>
              ))}
            </Block>
          </Right>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutUs;

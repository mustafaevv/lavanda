import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import links from "../router";
import icons from "./footerItems";

const Footers = styled.footer`
  background: #46972b;
  width: 100%;
  padding: 20px 0;
`;

const FooterContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 786px) {
    margin-bottom: 20px;
  }
`;

const IconList = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  gap: 2em;

  @media (max-width: 786px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.a`
  color: #fff;
  font-size: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  margin-left: 20px;

  @media (max-width: 786px) {
    text-align: center;
  }
`;

const Link = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  font-weight: 400;
  text-transform: capitalize;
  display: inline-block;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #fff;
    display: block;
    transform: scaleX(0);
    transition: 0.4s transform;
    transform-origin: center;
  }

  &::after {
    transform: scaleX(1);
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <Footers id="contact">
      <FooterContent>
        <Logo href="/">lavanda</Logo>
        <Items>
          <IconList>
            {icons.map(({ icon, link }, index) => (
              <li key={index}>
                <Icon target="_blank" href={link}>
                  {icon}
                </Icon>
              </li>
            ))}
          </IconList>
          <List>
            {links.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </List>
        </Items>
      </FooterContent>
    </Footers>
  );
};

export default Footer;

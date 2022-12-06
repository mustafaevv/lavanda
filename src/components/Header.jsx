import React from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Container from "../layout/Container";
import links from "../router";

const Headers = styled.header`
  padding: 15px 0;
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  color: #46972b;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 4em;
`;

const Link = styled.a`
  color: #17171a;
  font-size: 18px;
  text-decoration: none;
  font-weight: 400;
  text-transform: capitalize;
  display: inline-block;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #17171a;
    display: block;
    transform: scaleX(0);
    transition: 0.4s transform;
    transform-origin: center;
  }

  &:hover::after{
    transform: scaleX(1);
  }
`;

const Order = styled.a`
  color: #17171a;
  text-decoration: none;
  font-size: 26px;
`;

const Header = () => {
  return (
    <Headers>
      <HeaderContent>
        <Logo href="/">lavanda</Logo>
        <List>
          {links.map(({ name, link }) => (
            <li key={link}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </List>
        <Order href="/order">
          <HiOutlineShoppingBag />
        </Order>
      </HeaderContent>
    </Headers>
  );
};

export default Header;

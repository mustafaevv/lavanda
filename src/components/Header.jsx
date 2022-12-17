import React from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";

import Container from "../layout/Container";
import links from "../router";
import { getItemsCount } from "../redux/cart";

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

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Order = styled.a`
  position: relative;
  color: #17171a;
  text-decoration: none;
  font-size: 30px;
`;

const Counter = styled.p`
  position: absolute;
  background: #46972b;
  top: -5px;
  left: calc(100% - 10px);
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
`;

const Header = () => {
  const cartItemCount = useSelector(getItemsCount);

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
        <Order href="/cart">
          <HiOutlineShoppingBag />
          {Boolean(cartItemCount) && <Counter>{cartItemCount}</Counter>}
        </Order>
      </HeaderContent>
    </Headers>
  );
};

export default Header;

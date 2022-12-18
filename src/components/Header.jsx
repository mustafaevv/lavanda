import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import Container from "../layout/Container";
import links from "../router";
import Menubar from "./Menubar";
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

  @media (max-width: 992px) {
    display: none;
  }
`;

const Links = styled(Link)`
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

const Order = styled(Link)`
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

const Btn = styled.div`
  z-index: 8888888;
  display: none;
  border: none;
  background: none;
  font-size: 24px;
  color: #17171a;

  @media (max-width: 992px) {
    display: block;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClickActive = () => setIsActive((state) => !state);

  const cartItemCount = useSelector(getItemsCount);

  return (
    <Headers>
      <HeaderContent>
        <Logo href="/">lavanda</Logo>
        <List>
          {links.map((item) => (
            <li key={item.link}>
              <Links to={item.link}>{item.name}</Links>
            </li>
          ))}
        </List>
        <Order to="/cart">
          <HiOutlineShoppingBag />
          {Boolean(cartItemCount) && <Counter>{cartItemCount}</Counter>}
        </Order>
        <Menubar isActive={isActive} handleClickActive={handleClickActive} />
        <Btn>
          <Hamburger toggled={isActive} toggle={handleClickActive} />
        </Btn>
      </HeaderContent>
    </Headers>
  );
};

export default Header;

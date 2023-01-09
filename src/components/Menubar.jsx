import React, { useEffect } from "react";
import styled from "styled-components";

import links from "../router";

const Navbar = styled.nav`
  position: fixed;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  top: 0%;
  overflow: hidden;
  width: 40%;
  height: 100vh;
  z-index: 100;
  transition: 0.6s ease-in-out;
  background: #fff;
  padding: 100px 30px 0 40px;
`;

const List = styled.ul`
  width: 100%;
  padding-left: 0;
  text-align: center;
  list-style: none;
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 2;
  text-transform: capitalize;
  color: #17171a;
  text-decoration: none;
  transition: 0.4s color;

  &:hover {
    color: #0c1f41;
  }
`;

const Menubar = ({ isActive, handleClickActive }) => {
  useEffect(() => {
    isActive === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isActive]);
  return (
    <Navbar isActive={isActive}>
      <List>
        {links.map((item, i) => (
          <li key={i}>
            <Link onClick={handleClickActive} href={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </List>
    </Navbar>
  );
};

export default Menubar;

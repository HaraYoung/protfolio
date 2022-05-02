import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = Styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 3px 4px -2px #292929;
  font: bold 50px;
  letter-spacing: 5px;
  z-index: 10;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;

  a {
  display: block;
  padding: 15px 20px;
  margin: 6px;
  &::hover {
  background-color: rgba(128, 128, 128, 0.623);
}
}
.right {
  display: flex;
}

`;

const Nav = () => {
  return (
    <NavItem>
      <div>
        <NavLink to="#" className="left">
          Gourmet au Catering
        </NavLink>
      </div>
      <div className="right">
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Menu</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
    </NavItem>
  );
};

export default Nav;

/**패키지 참조 */
import React from "react";
import Styled from "styled-components";
import {NavLink} from "react-router-dom";


const FooterItem = Styled.div`
  padding: 50px;
  background-color: gainsboro;
  text-align: center;
  font-size: 18px;
  a {
  text-decoration: underline;
}

`;

const Footer = () => {
    return(
  <FooterItem>
    Powered by
    <NavLink to="https://www.w3schools.com/w3css/default.asp">w3.css</NavLink>
  </FooterItem>

    );
};

export default Footer;

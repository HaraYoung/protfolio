/**패키지 참조 */
import React from "react";
import Styled from "styled-components";

const HeaderItem = Styled.div`
    display: flex;
    justify-content: center;
header {
    position: relative;
    .img1 {
    width: 1600px;
    height:800px;
    
    }
    .img-1-text {
    position: absolute;
    left: 20px;
    bottom: 10px;
    font: 36px lighter;
    color: grey;
    }
}
`;

const Header = () => {
  return (
    <HeaderItem>
      <header>
        <img className="img1" src="img/hamburger.jpg" alt="hamburger" />
        <h1 className="img-1-text">Le Catering</h1>
      </header>
    </HeaderItem>
  );
};

export default Header;

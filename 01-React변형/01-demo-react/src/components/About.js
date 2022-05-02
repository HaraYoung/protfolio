import React from "react";
import Styled from "styled-components";

const AboutItem = Styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid gainsboro;
padding:64px 0;
.img2-box {
    opacity: 0.75;
    border-radius: 4px;
    }
.img2-text {
  width: 500px;
  text-align: left;
  padding-left: 100px;
    h1 {
    font-weight: 400;
    }
    h4 {
    font-weight: 400;
    font-size: 1em;
    }
    p {
    font-size: 19px;
    letter-spacing: 2px;
        span {
        background-color: rgb(202, 202, 202);
        padding: 2px;
        }
        &:last-child {
            color:#757575;
        }
    }

}
`;

const About = () => {
    return(
  <AboutItem>
    <div className="img2-box">
      <img src="img/tablesetting2.jpg" alt="Table Setting"/>
    </div>
    <div className="img2-text">
          <h1>About Catering</h1>
          <br />
          <h4>Tradition since 1889</h4>
          <p>
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. We only use <span>seasonal</span> ingredients.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
  </AboutItem>
    );
};

export default About;

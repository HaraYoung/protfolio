/**패키지 참조 */
import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";

const ContactItem = Styled.div`
width:60%;
padding:64px 0;
margin: auto;

  .footer-text {
  font-size: 15px;
  .firstP {
      p{
        margin-top: 0px;
      }
  }
  b {
  color: rgb(105, 162, 185);
  font-size: 18px;
}

}
form{
    input {
    width: 100%;
    height: 50px;
    border: 0px solid white;
    border-bottom: 1px solid gainsboro;
    margin-top: 10px;
    }

}
    a {
    display: inline-block;
    padding: 10px;
    margin-top: 30px;
    background-color: gainsboro;
        &:hover {
        background-color: grey;
        }
    }
`;

const Contact = () => {
  return (
    <ContactItem>
      <div className="footer-text">
        <h1>Contact</h1>
        <br />
        <p className="firstP">
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste.
          <p>Do not hesitate to contact us.</p>
        </p>
        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
      </div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="How many people" />
        <input type="date" />
        <input type="text" placeholder="Message \ Special requirements" />
        <NavLink to="#">SEND MESSNavLinkGE</NavLink>
      </form>
    </ContactItem>
  );
};

export default Contact;

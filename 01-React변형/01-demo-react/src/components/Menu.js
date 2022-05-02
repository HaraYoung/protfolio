/**패키지 참조 */

import React from "react";
import Styled from "styled-components";

const MenuItem= Styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid gainsboro;
padding:64px 0;
  .menu-text {
      padding: 12px 24px;
    h4 {
    font-weight: 400;
        }
    p {
    color: grey;
    }
}
.menu-img{
    padding: 12px 24px;
    opacity: 0.75;
    border-radius: 4px;
}
`;

const Menu = () => {
    return(
    <MenuItem>
        <div className="menu-text">
          <h1>Our Menu</h1>
          <h4>Bread Basket</h4>
          <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
          <br />

          <h4>Honey Almond Granola with Fruits</h4>
          <p>
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
          <br />

          <h4>Belgian Waffle</h4>
          <p>Vanilla flavored batter with malted flour 7.50</p>
          <br />

          <h4>Scrambled eggs</h4>
          <p>
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
          <br />

          <h4>Blueberry Pancakes</h4>
          <p>With syrup, butter and lots of berries 8.50</p>
        </div>
        <div className="menu-img">
          <img src="img/tablesetting.jpg" alt="Menu" />
        </div>
    </MenuItem>
    );
};

export default Menu;
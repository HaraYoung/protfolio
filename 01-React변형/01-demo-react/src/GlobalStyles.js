/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 *               이 파일에서 정의한 class는 ReactJSX에서 className속성으로 참조해야 한다.
 * @author: Park seyoung
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";

const GlobalStyles= createGlobalStyle`
* {
  font-family: "Times New Roman", Georgia, Serif;
}
body {
        margin: 0;
        padding: 0;
    }
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}
a {
  text-decoration: none;
  color: black;
}

`;
export default GlobalStyles;

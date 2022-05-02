/**패키지 참조 */
import React from "react";
import Styled from "styled-components";

/**컴포넌트 참조 */
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

const MainItem= Styled.div`
width: 80%;
margin:auto;

`;

const Main = () => {
    return(

    <MainItem>
        <About/>
        <Menu/>
        <Contact/>
    </MainItem>
    );
};

export default Main;
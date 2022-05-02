/**
 * @filename: App.js
 * @description: 페이지를 구성하는 컴포넌트 참조, 화면에 html뷰를 생성
 * @author: Park seyoung
 */


/** 패키지 참조 */
// 기본 참조 객체
import React from 'react';
//구간별 참조
import Nav from './page/Nav';
import Header from './page/Header';
import Main from './page/Main';
import Footer from './page/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

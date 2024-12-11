import React from 'react';
import Header from '../component/Header';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from './Page7';
import Page8 from './Page8';
// import HireMe from "./HireMe";
import Page9 from './Page9';

function Main() {
  return (
    <div>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7/>
      <Page8/>
      <div className='mt-36'>
      <Page9/>
      </div>
      
    </div>
  );
}

export default Main;

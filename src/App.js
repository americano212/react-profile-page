import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

import FullPageSection1 from './component/mainpage_section_1';
import FullPageSection2 from './component/mainpage_section_2';
import FullPageSection3 from './component/mainpage_section_3';
import Header from './component/Header';

export default function FullPageLanding() {
  $(() => {
      $('#fullpage').fullpage({
          scrollOverflow: true,
          sectionsColor: ['#ffffff', '#D6C7ED', '#9FD4EB'],
          navigation: true,
          navigationTooltips: ['Home', 'What', 'Who'],
          scrollingSpeed: 1000,
      });
  });
  return (
    <div id='app'>
        <Header></Header>    
        <div id="fullpage">
            <FullPageSection1></FullPageSection1>
            <FullPageSection2></FullPageSection2>
            <FullPageSection3></FullPageSection3>
        </div>

    </div>

  );
}
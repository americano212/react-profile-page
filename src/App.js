import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

import FullPageSection_1 from './component/mainpage_section_1';
import FullPageSection_2 from './component/mainpage_section_2';
import FullPageSection_3 from './component/mainpage_section_3';
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
      <div id="fullpage">
          <Header></Header>
          <FullPageSection_1></FullPageSection_1>
          <FullPageSection_2></FullPageSection_2>
          <FullPageSection_3></FullPageSection_3>
      </div>
  );
}
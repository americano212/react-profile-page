import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

import FullPageSection1 from './component/mainpage_section_1';
import FullPageSection2 from './component/mainpage_section_2';
import FullPageSection3 from './component/mainpage_section_3';
import FullPageSection4 from './component/mainpage_section_4';
import Header from './component/Header';

import { useMediaQuery } from 'react-responsive';


import MobileSection1 from './component/mobile_section_1';
import MobileSection2 from './component/mobile_section_2';
import MobileSection3 from './component/mobile_section_3';
import MobileSection4 from './component/mobile_section_4';

export default function FullPageLanding() {
  $(() => {
      $('#fullpage').fullpage({
          scrollOverflow: true,
          sectionsColor: ['#ffffff', '#f0f0f1', '#ffffff','#f0f0f1'],
          navigation: true,
          navigationTooltips: ['Home', 'Career', 'Projects','Contacts'],
          scrollingSpeed: 1000,
      });
  });
  const standardWidth = 1024;
  const ISpcScreen = useMediaQuery({ query: `(min-width: ${standardWidth}px)` });
  const ISmobileScreen = useMediaQuery({ query: `(max-width: ${standardWidth-1}px)` });
  return (
    <div id='app'>
        <Header></Header>    
        <div id="fullpage">
            {ISpcScreen && <FullPageSection1></FullPageSection1>}
            {ISmobileScreen && <MobileSection1></MobileSection1>}
            
            {ISpcScreen && <FullPageSection2></FullPageSection2>}
            {ISmobileScreen && <MobileSection2></MobileSection2>}

            {ISpcScreen && <FullPageSection3></FullPageSection3>}
            {ISmobileScreen && <MobileSection3></MobileSection3>}

            {ISpcScreen && <FullPageSection4></FullPageSection4>}
            {ISmobileScreen && <MobileSection4></MobileSection4>}
        </div>

    </div>

  );
}


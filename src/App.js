import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import $ from 'jquery';

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
          <div className="section">1 page</div>
          <div className="section">2 page</div>
          <div className="section">3 page</div>
      </div>
  );
}
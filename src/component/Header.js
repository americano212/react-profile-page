import React, {Component} from "react";
import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a
          href="https://www.linkedin.com/in/americano212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="youtubeButton buttonBox">LINKEDIN</div>
        </a>

        <a
          href="https://github.com/wq0212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="githubButton buttonBox">GITHUB</div>
        </a>

        <a
          href="https://pypystory.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="blogButton buttonBox">BLOG</div>
        </a>
      </div>
    );
  }
}

export default Header;

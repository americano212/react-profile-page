import React, {Component} from "react";
import "../css/mobile_Header.css";
import {FaLinkedin, FaGithub, FaBloggerB, FaFileAlt} from "react-icons/fa";
class Header extends Component {
  render() {
    return (
      <div className="headerM">
        <a
          href="https://www.youtube.com/channel/UCXgIxJNWOp3E6RfYcUuaH3g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="youtubeButton buttonBox">
            <FaLinkedin size={30} />
          </div>
        </a>

        <a
          href="https://github.com/wq0212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="githubButton buttonBox">
            <FaGithub size={30} />
          </div>
        </a>

        <a
          href="https://pypystory.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="blogButton buttonBox">
            <FaBloggerB size={30} />
          </div>
        </a>
        <a
          href="https://resume.dongjun.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resumeButton buttonBox">
            <FaFileAlt size={30} />
          </div>
        </a>
      </div>
    );
  }
}

export default Header;

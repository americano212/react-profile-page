import React, {Component} from "react";
import "../css/fullpage-overrides.css";
import "../css/mobile_section_3.css";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./ui/badge";
class MobileSection3 extends Component {
  render() {
    return (
      <div className="section">
        <div className="projectWrapM">
          <h1>Projects</h1>
          <br />
          <div className="projectBoxM">
            <h4>Campus Compass</h4>
            <p>Sogang Univ. Artech Hackathon 1st</p>
            <p>
              <div className="p_bold">Main Tech Stack</div>
              <br />
              <Badge
                badgeName="Nodejs"
                badgeLogo="Node.js"
                badgeColor="white"
                badgeKind="square"
              >
                node.js-339933
              </Badge>
              <Badge
                badgeName="Mysql"
                badgeLogo="MySql"
                badgeColor="white"
                badgeKind="square"
              >
                Mysql-E6B91E
              </Badge>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/wq0212/campus-compass"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://pypystory.tistory.com/12"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog Review
              </a>
            </p>
          </div>
          <div className="projectBoxM">
            <h4>Blog Create</h4>
            <p>Make own blog project use Django</p>
            <p>
              <div className="p_bold">Main Tech Stack</div>
              <br />
              <Badge
                badgeName="Django"
                badgeLogo="Django"
                badgeColor="white"
                badgeKind="square"
              >
                Django-092E20
              </Badge>
              <Badge
                badgeName="Docker"
                badgeLogo="docker"
                badgeColor="white"
                badgeKind="square"
              >
                docker-%230db7ed.svg
              </Badge>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/wq0212/BlogCreate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
          <div className="projectBoxM">
            <h4>DDAKZIP (APP)</h4>
            <p>SW Maestro Project, App service for home seekers (2022.4 ~ )</p>
            <p>
              <div className="p_bold">Main Tech Stack</div>
              <br />
              <Badge
                badgeName="TS"
                badgeLogo="typescript"
                badgeColor="white"
                badgeKind="square"
              >
                Typescript-3178C6
              </Badge>
              <Badge
                badgeName="Express"
                badgeLogo="Express"
                badgeColor="white"
                badgeKind="square"
              >
                express-000000
              </Badge>
              <Badge
                badgeName="AWS"
                badgeLogo="amazon-aws"
                badgeColor="white"
                badgeKind="square"
              >
                AWS-232F3E
              </Badge>
              <Badge
                badgeName="GraphQL"
                badgeLogo="graphql"
                badgeColor="white"
                badgeKind="square"
              >
                GraphQL-E10098
              </Badge>
            </p>
            <br />
            <p>
              <a
                href="https://github.com/wq0212/SGEngineering-Board"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://ddakzip.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Landing Page
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileSection3;

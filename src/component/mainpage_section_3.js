import React, {Component} from "react";
import "../css/fullpage-overrides.css";
import "../css/mainpage_section_3.css";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./ui/badge";
class FullPageSection3 extends Component {
  render() {
    return (
      <div className="section">
        <div className="projectWrap">
          <h1>Projects</h1>
          <br />
          <div className="projectBox leftBox">
            <h4>Campus Compass</h4>
            <br />
            <p>Sogang Univ. Artech Hackathon 1st (2021.12)</p>
            <p>
              <div className="p_bold">Main Tech Stack :&nbsp;</div>
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
              <div className="p_bold">Summary</div> : '대학생활에서 궁금한
              부분에 대한 길을 찾아주는 나침반'
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
          <div className="projectBox rightBox">
            <h4>Blog Create</h4>
            <br />
            <p>Make own blog project use Django (2021.1 ~ 2021.6)</p>
            <p>
              <div className="p_bold">Main Tech Stack :&nbsp;</div>
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
              <div className="p_bold">Summary</div> : 처음으로 웹개발을 공부하며
              만들기 시작한 Django 기반 카페형 블로그
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
          <div className="projectBox leftBox">
            <h4>DDAKZIP (APP)</h4>
            <br />
            <p>SW Maestro Project, App service for home seekers (2022.4 ~ )</p>
            <p>
              <div className="p_bold">Main Tech Stack :&nbsp;</div>
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
              <div className="p_bold">Summary</div> : 자취방을 구하는 사람들을
              위한 어플, 매물 비교 및 추천, 발품 체크리스트 등의 기능
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

export default FullPageSection3;

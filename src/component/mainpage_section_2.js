import React, { Component } from "react";
import "../css/fullpage-overrides.css";
import "../css/mainpage_section_2.css";
import Career from "./ui/career";
import Collapse from "./ui/collapse";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./ui/badge";
class FullPageSection2 extends Component {
  render() {
    return (
      <div className="section">
        <div className="careerWrap">
          <h1>Career</h1>
          <br />
          <Career careerName="부산과학고등학교" careerLink="http://bss.hs.kr">
            2017.3 ~ 2020.2
          </Career>
          <br />
          <Career
            careerName="서강대학교 컴퓨터공학과 학부"
            careerLink="https://cs.sogang.ac.kr/cs/index_new.html"
          >
            2020.3 ~ (휴학)
          </Career>

          <Collapse>
            <Career
              careerName="Sogang ICPC Team"
              careerLink="https://acm.sogang.ac.kr/"
              careerSummary="&nbsp;- 알고리즘 학회"
            >
              학회원, 2020.3 ~ (현재)
            </Career>
            <Career
              careerName="Release"
              careerLink="http://release.sogang.ac.kr/"
              careerSummary="&nbsp;- 개발 학회"
            >
              임원, 2020.9 ~ (현재)
            </Career>
            <Career
              careerName="CNU"
              careerLink="#"
              careerSummary="&nbsp;- 웹 개발 학회"
            >
              학회원, 2021.3 ~ (현재)
            </Career>
            <Career
              careerName="Sogang Wise Investing Club, SWIC"
              careerLink="http://sgswic.com/"
              careerSummary="&nbsp;- 재테크 학회"
            >
              팀장, 2020.9 ~ 2021.12
            </Career>
          </Collapse>

          <br />
          <Career
            careerName="SW 마에스트로 13기"
            careerLink="https://www.swmaestro.org/sw/main/main.do"
          >
            2022.4 ~ (현재)
          </Career>
        </div>
        <div className="techWrap">
          <h1>Tech Stack</h1>
          <br />
          <h4>Language</h4>
          <Badge badgeName="Python" badgeLogo="Python" badgeColor="white">
            Python-3766AB
          </Badge>
          <Badge badgeName="C++" badgeLogo="C%2B%2B" badgeColor="white">
            C++-00599C
          </Badge>
          <Badge badgeName="C" badgeLogo="C" badgeColor="white">
            C-A8B9CC
          </Badge>
          <Badge badgeName="JS" badgeLogo="javascript" badgeColor="white">
            Javascript-ffb13b
          </Badge>
          <Badge badgeName="TS" badgeLogo="typescript" badgeColor="white">
            Typescript-3178C6
          </Badge>
          <br />
          <hr />
          <h4>Framework</h4>
          <Badge badgeName="Express" badgeLogo="Express" badgeColor="white">
            express-000000
          </Badge>
          <Badge badgeName="Nestjs" badgeLogo="nestjs" badgeColor="white">
            nestjs-%23E0234E.svg
          </Badge>
          <Badge badgeName="Django" badgeLogo="Django" badgeColor="white">
            Django-092E20
          </Badge>
          <Badge badgeName="React" badgeLogo="react" badgeColor="61DAFB">
            React-20232A
          </Badge>

          <br />
          <hr />
          <h4>Database</h4>
          <Badge badgeName="Mysql" badgeLogo="MySql" badgeColor="white">
            Mysql-E6B91E
          </Badge>
          <Badge badgeName="MongoDB" badgeLogo="mongodb" badgeColor="white">
            MongoDB-4EA94B
          </Badge>
          <br />
          <hr />
          <h4>Infra</h4>
          <Badge badgeName="AWS" badgeLogo="amazon-aws" badgeColor="white">
            Amazon_AWS-232F3E
          </Badge>
          <Badge badgeName="amazonaws" badgeLogo="amazonaws" badgeColor="white">
            EC2-FF9900
          </Badge>

          <br />
          <hr />
          <h4>Others</h4>
          <Badge badgeName="Docker" badgeLogo="docker" badgeColor="white">
            docker-%230db7ed.svg
          </Badge>
          <Badge badgeName="Git" badgeLogo="git" badgeColor="white">
            git-F05032
          </Badge>
          <br />
          <hr />
        </div>
      </div>
    );
  }
}

export default FullPageSection2;

import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mobile_section_2.css';
import Career from "./ui/career";

import 'bootstrap/dist/css/bootstrap.css';
import Badge from "./ui/badge";
class MobileSection2 extends Component{
    render(){
        return (
            <div className="section">
                <div className="careerWrapM">
                    <h2>Career</h2>
                    <Career careerName="부산과학고등학교" careerLink="http://bss.hs.kr">2017.3 ~ 2020.2</Career>
                    <Career careerName="서강대학교 컴퓨터공학과 학부" careerLink="https://cs.sogang.ac.kr/cs/index_new.html">2020.3 ~ (휴학)</Career>
                    <Career careerName="SW 마에스트로 13기" careerLink="https://www.swmaestro.org/sw/main/main.do">2022.4 ~ (현재)</Career>

                </div>
                <div className="techWrapM">
                    <h2>Tech Stack</h2>
                    <h6>Language</h6>
                    <Badge badgeName="Python" badgeLogo="Python" badgeColor="white" badgeKind="square">Python-3766AB</Badge>
                    <Badge badgeName="C++" badgeLogo="C%2B%2B" badgeColor="white" badgeKind="square">C++-00599C</Badge>
                    <Badge badgeName="C" badgeLogo="C" badgeColor="white" badgeKind="square">C-A8B9CC</Badge>
                    <Badge badgeName="JS" badgeLogo="javascript" badgeColor="white" badgeKind="square">Javascript-ffb13b</Badge>
                    <Badge badgeName="HTML" badgeLogo="html5" badgeColor="white" badgeKind="square">html5-E34F26</Badge>
                    <Badge badgeName="CSS" badgeLogo="css3" badgeColor="white" badgeKind="square">css-1572B6</Badge>
                    <br/>
                    <br/>
                    <hr/>
                    <h6>Framework</h6>
                    <Badge badgeName="Nodejs" badgeLogo="Node.js" badgeColor="white" badgeKind="square">node.js-339933</Badge>
                    <Badge badgeName="Django" badgeLogo="Django" badgeColor="white" badgeKind="square">Django-092E20</Badge>
                    <Badge badgeName="React" badgeLogo="react" badgeColor="61DAFB" badgeKind="square">React-20232A</Badge>
                    <br/>
                    <hr/>
                    <h6>Database</h6>
                    <Badge badgeName="Mysql" badgeLogo="MySql" badgeColor="white" badgeKind="square">Mysql-E6B91E</Badge>
                    <Badge badgeName="MongoDB" badgeLogo="mongodb" badgeColor="white" badgeKind="square">MongoDB-4EA94B</Badge>
                    <br/>
                    <hr/>
                    <h6>Server</h6>
                    <Badge badgeName="ubuntu" badgeLogo="ubuntu" badgeColor="white" badgeKind="square">Ubuntu-E95420</Badge>
                    <Badge badgeName="AWS" badgeLogo="amazon-aws" badgeColor="white" badgeKind="square">Amazon_AWS-232F3E</Badge>
                    <Badge badgeName="Docker" badgeLogo="docker" badgeColor="white" badgeKind="square">docker-%230db7ed.svg</Badge>
                    <br/>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default MobileSection2
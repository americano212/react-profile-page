import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_2.css';
import Career from "./ui/career";
import Collapse from './ui/collapse';
import 'bootstrap/dist/css/bootstrap.css';

class FullPageSection2 extends Component{
    render(){
        return (
            <div className="section">
                <div className="careerWrap">
                    <h1>Career</h1>
                    <br/>
                    <Career careerName="부산과학고등학교">2017.3 ~ 2020.2</Career>
                    <br />
                    <Career careerName="서강대학교 컴퓨터공학과 학부">2020.3 ~ (휴학)</Career>

                    <Collapse>
                        <Career careerName="Sogang ICPC Team" careerSummary="&nbsp;- 알고리즘 학회">학회원, 2020.3 ~ (현재)</Career>
                        <Career careerName="Release" careerSummary="&nbsp;- 개발 학회">임원, 2020.9 ~ (현재)</Career>
                        <Career careerName="CNU" careerSummary="&nbsp;- 웹 개발 학회">학회원, 2021.3 ~ (현재)</Career>
                        <Career careerName="Sogang Wise Investing Club, SWIC" careerSummary="&nbsp;- 재테크 학회">팀장, 2020.9 ~ 2021.12</Career>
                    </Collapse>

                    <br />
                    <Career careerName="SW 마에스트로 13기">2022.4 ~ (현재)</Career>

                </div>
                <div className="techWrap">
                    <h1>Tech Stack</h1>
                    <br/>
                    <h4>Language</h4>
                    <img src="https://img.shields.io/badge/Python-3766AB?style=for-the-badge&logo=Python&logoColor=white" alt="Python"/>&nbsp;
                    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=C%2B%2B&logoColor=white" alt="C++"/>&nbsp;
                    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=C&logoColor=white" alt="C"/>&nbsp;
                    <img src="https://img.shields.io/badge/Javascript-ffb13b?style=for-the-badge&logo=javascript&logoColor=white" alt="JS"/>&nbsp;
                    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML"/>&nbsp; 
                    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>&nbsp; 
                    <hr/>
                    <h4>Framework</h4>
                    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="Nodejs"/>&nbsp;
                    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white" alt="Django"/>&nbsp;
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>&nbsp;
                    
                    <hr/>
                    <h4>Database</h4>
                    <img src="https://img.shields.io/badge/Mysql-E6B91E?style=for-the-badge&logo=MySql&logoColor=white" alt="Mysql"/>&nbsp;
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>&nbsp;
                    <hr/>
                    <h4>Server</h4>
                    <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="ubuntu"/>&nbsp;
                    <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS"/>&nbsp;
                    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>&nbsp;
                    <hr/>
                </div>
            </div>
        )
    }
}

export default FullPageSection2
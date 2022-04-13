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
                    <Career careerName="부산과학고등학교">2017.3 ~ 2020.2</Career>
                    <br />
                    <Career careerName="서강대학교 컴퓨터공학과 학부">2020.3 ~ (휴학)</Career>

                    <Collapse />

                    <br />
                    <Career careerName="SW 마에스트로 13기">2022.4 ~ (현재)</Career>

                </div>

            </div>
        )
    }
}

export default FullPageSection2
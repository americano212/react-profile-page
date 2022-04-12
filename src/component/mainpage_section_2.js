import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_2.css';
import Career from "./ui/career";

class FullPageSection2 extends Component{
    render(){
        return (
            <div className="section">
                <div className="careerWrap">
                    <h1>Career</h1>
                    <Career careerName="부산과학고등학교" careerSummary>2017.3 ~ 2020.2</Career>

                    <br />
                    <Career careerName="서강대학교 컴퓨터공학과 학부" careerSummary>2020.3 ~ (휴학)</Career>

                    <Career careerName="Sogang ICPC Team" careerSummary=" - 알고리즘 학회">학회원, 2020.3 ~ (현재)</Career>

                    <Career careerName="Release" careerSummary=" - 개발 학회">임원, 2020.9 ~ (현재)</Career>

                    <Career careerName="CNU" careerSummary=" - 웹 개발 학회">학회원, 2021.3 ~ (현재)</Career>

                    <Career careerName="Sogang Wise Investing Club, SWIC" careerSummary=" - 재테크 학회">팀장, 2020.9 ~ 2021.12</Career>


                </div>

            </div>
        )
    }
}

export default FullPageSection2
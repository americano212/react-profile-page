import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_2.css';

class FullPageSection2 extends Component{
    render(){
        return (
            <div className="section">
                <div className="careerWrap">
                    <h1>Career</h1>
                    <p>부산과학고등학교</p>
                    <p>2017.3 ~ 2020.2</p>
                    <br />
                    <p>서강대학교 컴퓨터공학과 학부</p>
                    <p>2020.3 ~ (휴학)</p>
                    <p>Sogang ICPC Team - 알고리즘 학회</p>
                    <p>학회원, 2020.3 ~ </p>
                    <p>Release - 개발 학회</p>
                    <p>임원, 2020.9 ~ </p>
                    <p>CNU - 웹 개발 학회</p>
                    <p>학회원, 2021.3 ~ </p>
                    <p>Sogang Wise Investing Club, SWIC - 재테크 학회</p>
                    <p>팀장, 2020.9 ~ 2021.12</p>

                </div>

            </div>
        )
    }
}

export default FullPageSection2
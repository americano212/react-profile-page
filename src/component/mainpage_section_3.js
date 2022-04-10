import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_3.css';

class FullPageSection3 extends Component{
    render(){
        return (
            <div className="section">
                <div className="projectWrap">
                    <h2>Projects</h2>
                    <div className="projectBox leftBox">
                        <h4>Campus Compass</h4>
                        <p>Sogang Univ. Artech Hackathon 1st (2021.12)</p>
                        <p>Main Tech Stack : Node.js + express, MySQL</p>
                        <p>Summary : '대학생활에서 궁금한 부분에 대한 길을 찾아주는 나침반'</p>
                        <p><a href="https://github.com/wq0212/campus-compass" target="_blank"
rel="noopener noreferrer">Github</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://pypystory.tistory.com/12" target="_blank"
rel="noopener noreferrer">Blog Review</a></p>
                    </div>
                    <div className="projectBox rightBox">
                        <h4>Blog Create</h4>
                        <p>Make own blog project use Django (2021.1 ~ 2021.6)</p>
                        <p>Main Tech Stack : Django, Docker</p>
                        <p>Summary : 처음으로 웹개발을 공부하며 만들기 시작한 Django 기반 카페형 블로그</p>
                        <a href="https://github.com/wq0212/BlogCreate" target="_blank"
rel="noopener noreferrer"><p>Github</p></a>
                    </div>
                    <div className="projectBox leftBox">
                        <h4>Engineering Board</h4>
                        <p>Sogang Univ. Engineering Student Council Board</p>
                        <p>Main Tech Stack : Node.js + express, Mysql</p>
                        <p>Summary : 처음으로 git을 이용해 협업을 하면서 개발한 공학부 신문고 게시판</p>
                    </div>
                    <div className="projectBox rightBox">
                        <h4>Profile Page</h4>
                        <p>Make own profile page use react</p>
                        <p>Main Tech Stack : React</p>
                        <p>Summary : 지금 보고 계시는 프로필 페이지</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullPageSection3
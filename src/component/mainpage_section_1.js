import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_1.css';
import {Helmet} from "react-helmet";

class FullPageSection1 extends Component{
    render(){
        return (
            <div className="section">
                <div className="profileWrap">
                    <div className="nameBox">
                        <p>신 동 준</p>
                        <p>DONGJUN SHIN </p>
                    </div>
                    <br />
                    <div className="mainTextBox">
                        <p>One Coding</p>
                        <p>One Coffee</p>
                        <p>for a day</p>
                    </div>
                    <br />
                    <br />
                    <div className="mottoTextBox">
                        <p>하루 한잔의 커피와 함께, 오늘 하루도 최선을 다하며 살아가고 있습니다.</p>
                        <p>이런저런 경험을 해보며, 꾸준히 성장하는 개발자가 되려합니다.</p>
                    </div>
                    <br />
                    <div className="educationBox">
                        <h2>EDUCATION</h2>
                        <p>SW마에스트로 13기 연수생 활동 중</p>
                        <p>Sogang Univ. Computer Science</p>
                        <p>서강대학교 컴퓨터공학과 학부 휴학 중</p>
                        <p>Busan Science High School, 15th Graduate</p>
                    </div>
                    <div className="timeBox">
                    <div id="remain-time"></div>
                    <Helmet>
                    <script>

                    </script>
                    </Helmet>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default FullPageSection1
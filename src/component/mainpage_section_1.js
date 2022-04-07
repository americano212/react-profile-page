import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
class FullPageSection1 extends Component{
    render(){
        return (
            <div className="section">
                <h2>Profile</h2>
                <div className="nameBox">
                    <p>신 동 준</p>
                    <p>DONGJUN SHIN </p>
                    
                </div>
                <hr />
                <div className="mainTextBox">
                    <p>One Coding</p>
                    <p>One Coffee</p>
                    <p>for a day</p>
                </div>
                <div className="mottoTextBox">

                </div>
                <hr />
                <div className="educationBox">
                    <h2>EDUCATION</h2>
                    <p>Sogang Univ. Computer Science</p>
                    <p>서강대학교 컴퓨터공학과 학부 재학 중</p>
                    <p>Busan Science High School, 15th Graduate</p>
                </div>
                <div className="birthBox">

                </div>
            </div>
        )
    }
}

export default FullPageSection1
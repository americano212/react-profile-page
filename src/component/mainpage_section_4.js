import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_4.css';

import Logo from "./ui/logo";

class FullPageSection4 extends Component{
    render(){
        return (
            <div className="section">
                <div className="contactWrap">
                    <Logo logoName="Instagram" logoPath="img/icon/instagram.svg" logoLink="#">dongjun0212</Logo>
                    <Logo logoName="Github" logoPath="img/icon/github.svg" logoLink="#">wq0212</Logo>
                    <Logo logoName="Facebook" logoPath="img/icon/facebook.svg" logoLink="#">신동준</Logo>
                    
                    <Logo logoName="Youtube" logoPath="img/icon/youtube.svg" logoLink="#">PyPyStory</Logo>
                    <Logo logoName="Mail" logoPath="img/icon/gmail.svg" logoLink="#">wq0212<br />@naver.com</Logo>
                </div>
            </div>
        )
    }
}

export default FullPageSection4
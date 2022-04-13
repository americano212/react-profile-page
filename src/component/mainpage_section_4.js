import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_4.css';

import Logo from "./ui/logo";

class FullPageSection4 extends Component{
    render(){
        return (
            <div className="section">
                <div className="contactWrap">
                    
                    
                    <Logo logoName="Facebook" logoPath="img/icon/facebook.svg" logoLink="#" background="#4267B2">신동준</Logo>
                    <Logo logoName="Instagram" logoPath="img/icon/instagram.svg" logoLink="#" background="#C13584">dongjun0212</Logo>
                    <Logo logoName="Blog" logoPath="img/icon/blog.svg" logoLink="#" background="#eb531f">PyPyStory</Logo>
                    <Logo logoName="Github" logoPath="img/icon/github.svg" logoLink="#" background="#333">wq0212</Logo>
                    <Logo logoName="Youtube" logoPath="img/icon/youtube.svg" logoLink="#" background="#FF0000">PyPyStory</Logo>
                    <Logo logoName="Mail" logoPath="img/icon/gmail.svg" logoLink="#" background="#EA4335">wq0212<br />@naver.com</Logo>
                </div>
            </div>
        )
    }
}

export default FullPageSection4
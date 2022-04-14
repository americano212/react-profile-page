import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import '../css/mainpage_section_4.css';

import Logo from "./ui/logo";

class MobileSection4 extends Component{
    render(){
        return (
            <div className="section">
                <div className="contactWrap">
                    <h1>Contacts</h1>
                    <div className="logoBox">                    
                    <Logo logoName="Facebook" logoPath="img/icon/facebook.svg" logoLink="https://www.facebook.com/profile.php?id=100010290605875" background="#4267B2">신동준</Logo>
                    <Logo logoName="Instagram" logoPath="img/icon/instagram.svg" logoLink="https://www.instagram.com/dongjun0212/?hl=ko" background="#C13584">dongjun0212</Logo>
                    <Logo logoName="Blog" logoPath="img/icon/blog.svg" logoLink="https://pypystory.tistory.com/" background="#eb531f">PyPyStory</Logo>
                    <Logo logoName="Github" logoPath="img/icon/github.svg" logoLink="https://github.com/wq0212" background="#333">wq0212</Logo>
                    <Logo logoName="Youtube" logoPath="img/icon/youtube.svg" logoLink="https://www.youtube.com/channel/UCXgIxJNWOp3E6RfYcUuaH3g" background="#FF0000">PyPyStory</Logo>
                    <Logo logoName="Mail" logoPath="img/icon/gmail.svg" logoLink="#" background="#EA4335">wq0212<br />@naver.com</Logo>
                    <Logo logoName="Kakao Talk" logoPath="img/icon/kakao.svg" logoLink="https://open.kakao.com/o/skoddvae" background="#FFE812">Open Talk</Logo>
                    </div>
                    <div className="logoBox">
                    <Logo logoName="Solved AC" logoPath="img/icon/solvedac.svg" logoLink="https://solved.ac/profile/wq0212" background="#17CE3A" logoSize="100" logoTop="0px">wq0212</Logo>
                    <Logo logoName="Baekjoon" logoPath="img/icon/boj.svg" logoLink="https://www.acmicpc.net/user/wq0212" background="#0077C1" logoSize="100" logoTop="0px">wq0212</Logo>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default MobileSection4
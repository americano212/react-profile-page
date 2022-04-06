import React,{ Component } from "react";
import '../css/Header.css';

class Header extends Component{
    render(){
        return (
            <div className="header">
                <a href="https://www.youtube.com/channel/UCXgIxJNWOp3E6RfYcUuaH3g">
                    <div className="youtubeButton buttonBox">
                        YOUTUBE
                    </div>
                </a>

                <a href="https://github.com/wq0212">
                    <div className="githubButton buttonBox">
                        GITHUB
                    </div>
                </a>

                <a href="https://pypystory.tistory.com/">
                    <div className="blogButton buttonBox">
                        BLOG
                    </div>
                </a>
                
            </div>
            
        )
    }
}

export default Header;
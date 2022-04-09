import React,{ Component } from "react";
import '../css/fullpage-overrides.css';
import Logo from "./ui/logo";

class FullPageSection4 extends Component{
    render(){
        return (
            <div className="section">
                <div className="contactBox">
                    <Logo logoName="Instagram" logoPath="#">dongjun0212</Logo>
                    <Logo logoName="Github" logoPath="#">wq0212</Logo>
                </div>
            </div>
        )
    }
}

export default FullPageSection4
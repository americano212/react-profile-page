import styled from "styled-components";

const LogoWrap = styled.div`
float: left;
margin: 3%;
margin-bottom: 0;
`;
const LogoIcon = styled.div`
border-radius: 30px;
width: 100px;
height: 100px;
text-align: center;
padding-top: ${(props) => props.logoTop || "22px"};;
margin-bottom: 10px;
background: ${(props) => props.background || "black"};
box-shadow: 10px 10px 10px gray;
`; //
const LogoName = styled.div``;
// const LogoLink = styled.div``;
export default function Logo({logoPath,background,logoName,children,logoLink,logoSize,logoTop}) {
    if(logoSize==null){
        logoSize = "50";
    }
    return (
        <LogoWrap>
            <a href={logoLink} 
            target="_blank"
            rel="noopener noreferrer">
            <LogoIcon background={background} 
            logoTop={logoTop}>
                <img src={logoPath} 
                alt={logoName} 
                width={logoSize} 
                height="auto"></img>
            </LogoIcon></a>
            <LogoName><p><a href={logoLink} 
            target="_blank" 
            rel="noopener noreferrer">{logoName}<br/>
            {children}</a></p></LogoName>
        </LogoWrap>
    );
}
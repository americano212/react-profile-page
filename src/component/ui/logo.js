import styled from "styled-components";

const LogoWrap = styled.div`
float: left;
margin: 3%;

`;
const LogoIcon = styled.div`
border-radius: 30px;
width: 100px;
height: 100px;
text-align: center;
padding-top: 22px;
margin-bottom: 10px;
background: ${(props) => props.background || "black"};
`;
const LogoName = styled.div``;
// const LogoLink = styled.div``;
export default function Logo({logoPath,background,logoName,children,logoLink}) {
    return (
        <LogoWrap>
            <a href={logoLink} 
            target="_blank"
            rel="noopener noreferrer">
            <LogoIcon background={background}><img src={logoPath} alt={logoName} width="50" height="auto"></img></LogoIcon></a>
            <LogoName><p><a href={logoLink} target="_blank" rel="noopener noreferrer">{logoName}<br/>
            {children}</a></p></LogoName>
        </LogoWrap>
    );
}
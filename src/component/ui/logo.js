import styled from "styled-components";

const LogoWrap = styled.div`
float: left;
margin: 3%;
`;
const LogoIcon = styled.div`

`;
const LogoName = styled.div``;
const LogoText = styled.div``;
// const LogoLink = styled.div``;
export default function Logo(props) {
    return (
        <a href={props.logoLink} 
        target="_blank"
        rel="noopener noreferrer">
        <LogoWrap>
            <LogoIcon><img src={props.logoPath} width="50" height="auto"></img></LogoIcon>
            <LogoName><p>{props.logoName}</p></LogoName>
            <LogoText><p>{props.children}</p></LogoText>
        </LogoWrap>
        </a>
    );
}
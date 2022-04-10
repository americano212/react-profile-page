import styled from "styled-components";

const LogoWrap = styled.div`
float: left;
margin: 3%;
`;
const logoIcon = styled.div`

`;
const logoName = styled.div``;
const logoText = styled.div``;
const logoLink = styled.div``;
export default function Logo(props) {
    return (
        <a href={props.logoLink} 
        target="_blank"
        rel="noopener noreferrer">
        <LogoWrap>
            <logoIcon><img src={props.logoPath} width="50" height="auto"></img></logoIcon>
            <logoName><p>{props.logoName}</p></logoName>
            <logoText><p>{props.children}</p></logoText>
        </LogoWrap>
        </a>
    );
}
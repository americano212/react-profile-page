import styled from "styled-components";

const LogoWrap = styled.div``;
const logoIcon = styled.div``;
const logoName = styled.div``;
const logoText = styled.div``;
export default function Logo(props) {
    return (
        <LogoWrap>
            <logoIcon>{props.logoPath}</logoIcon>
            <logoName><p>{props.logoName}</p></logoName>
            <logoText><p>{props.children}</p></logoText>
        </LogoWrap>
    );
}
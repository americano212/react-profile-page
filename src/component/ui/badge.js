import styled from "styled-components";

const BadgeWrap = styled.div`
float:left;
`;

export default function Badge(props) {
    return (
        <BadgeWrap>
            <img
            src={`https://img.shields.io/badge/${props.children}?style=for-the-badge&logo=${props.badgeLogo}&logoColor=${props.badgeColor}`}
            alt={props.badgeName}/>&nbsp;
        </BadgeWrap>
        
    );
}

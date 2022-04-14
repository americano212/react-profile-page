import styled from "styled-components";
import React from 'react';

const BadgeWrap = styled.div`
float:left;
`;
class Badge extends React.Component {
    render() {
        return (
            <BadgeWrap>
                <img
                src={`https://img.shields.io/badge/${this.props.children}?style=for-the-${this.props.badgeKind}&logo=${this.props.badgeLogo}&logoColor=${this.props.badgeColor}`}
                alt={this.props.badgeName}/>&nbsp;
            </BadgeWrap>
            
        );
    }
}

Badge.defaultProps = {
    badgeKind: 'badge'
};

export default Badge;
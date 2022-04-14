export default function Badge(props) {
    return (
        <img src="https://img.shields.io/badge/" + {props.children} + "?style=for-the-badge&logo=" + {props.badgeLogo} + "&logoColor=" + {props.badgeColor} alt={badgeName}/>&nbsp;
    );
}

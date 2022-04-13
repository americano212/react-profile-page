import styled from "styled-components";


const NameBox = styled.div`
font-weight: bold;
float: left;
text-decoration: underline;
text-underline-position:under;
`;
const SummaryBox = styled.div`
float: left;
`;
const DateBox = styled.div``;
const CareerBox = styled.div`
`;
export default function Career(props) {
    return (
        <CareerBox>
            <p><NameBox>{props.careerName}</NameBox><SummaryBox>{props.careerSummary}</SummaryBox></p>
            <br />
            <p><DateBox>{props.children}</DateBox></p>
        </CareerBox>
    );
}
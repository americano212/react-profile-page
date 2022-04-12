import styled from "styled-components";

const careerBox = styled.div``;
const nameBox = styled.div``;
const summaryBox = styled.div``;
const dateBox = styled.div``;
export default function Career(props) {
    return (
        <careerBox>
            <p><nameBox>{props.careerName}</nameBox><summaryBox>{props.careerSummary}</summaryBox></p>
            <p><dateBox>{props.children}</dateBox></p>
        </careerBox>
    );
}
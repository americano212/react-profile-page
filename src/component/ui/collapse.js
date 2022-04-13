import React, {Component} from 'react';
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';
import Career from "./career";
import styled from "styled-components";

class Collapse extends Component {
    render() {
        return (
            <div className="flex-column">
                <Button color="dark" id="toggle" size="sm">
                    더보기
                </Button>
                <UncontrolledCollapse toggler="#toggle" className="m-0 p-0">
                    <Card>
                        <CardBody>
                            <Career careerName="Sogang ICPC Team" careerSummary="&nbsp;- 알고리즘 학회">학회원, 2020.3 ~ (현재)</Career>
                            <Career careerName="Release" careerSummary="&nbsp;- 개발 학회">임원, 2020.9 ~ (현재)</Career>
                            <Career careerName="CNU" careerSummary="&nbsp;- 웹 개발 학회">학회원, 2021.3 ~ (현재)</Career>
                            <Career careerName="Sogang Wise Investing Club, SWIC" careerSummary="&nbsp;- 재테크 학회">팀장, 2020.9 ~ 2021.12</Career>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}
export default Collapse;

import React from 'react';
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';

function Collapse(props) {
    return (
        <div className="flex-column">
            <Button color="secondary" id="toggle" size='sm'>
                열기/닫기
            </Button>
            <UncontrolledCollapse toggler="#toggle" className="m-0 p-0" defaultOpen={true}>
                <Card>
                    <CardBody>
                        {props.children}
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    )
}
export default Collapse;

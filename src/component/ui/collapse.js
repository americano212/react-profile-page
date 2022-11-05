import React from "react";
import {UncontrolledCollapse, Button, CardBody, Card} from "reactstrap";
//  defaultOpen={true}
function Collapse(props) {
  return (
    <div className="flex-column">
      <Button color="secondary" id="toggle" size="sm">
        더보기
      </Button>
      <UncontrolledCollapse toggler="#toggle" className="m-0 p-0">
        <Card>
          <CardBody>{props.children}</CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}
export default Collapse;

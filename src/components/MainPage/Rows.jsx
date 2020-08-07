import React from "react";
import Row from "./row";
import "./rows.css";

const Rows = (props) => {
  return (
    <div className="Main" style={props.getBg()}>
      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="0"
        title="Upcoming"
      ></Row>
      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="1"
        title="Netflix Originals"
      ></Row>
      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="2"
        title="Trending"
      ></Row>
      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="3"
        title="TV Popular"
      ></Row>

      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="4"
        title="Movie Popular"
      ></Row>
      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="5"
        title="Marvel"
      ></Row>
      <Row
        callBackIn={props.myCallBackHoverIn}
        callBackOut={props.myCallBackHoverOut}
        name="6"
        title="DC"
      ></Row>
    </div>
  );
};

export default Rows;

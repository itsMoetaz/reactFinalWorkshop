import eventsJson from "../data/events.json";
import React, { useEffect, useState } from "react";
import Event from "./Event";
import Row from "react-bootstrap/Row";


export default function Events() {


  return (
    <div>
     
      
      <Row >
        {eventsJson.map((eventItem, index) => (
          <Event key={index} event={eventItem}  />
        ))}
      </Row>
    
    </div>
  );
}

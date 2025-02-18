import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


export default function Event(props) {
  
  return (
    <Col  sm={12} md={6} lg={3}>
      <Card>
        <Card.Img
          variant="top"
          style={{ height: 200 }}
          src={`${props.event.img}`}
        />
        <Card.Body>
          
            <Card.Title>{props.event.name}</Card.Title>
          
          <Card.Text>Price : {props.event.price}</Card.Text>
          <Card.Text>Number of tickets : {props.event.nbTickets}</Card.Text>
          <Card.Text>Number of participants : {props.event.nbParticipants}</Card.Text>
          
         
        </Card.Body>
      </Card>
    </Col>
  );
}

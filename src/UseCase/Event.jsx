import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export default function Event(props) {
  const [event, setEvent] = useState(props.event);

  const book=() => {
    props.fnt();
    setEvent((e)=> ({
...e,nbTickets :e.nbTickets-1,
nbParticipants:e.nbParticipants+1

    }))
  }
  return (
    <Col  sm={12} md={6} lg={3}>
      <Card>
        <Card.Img
          variant="top"
          style={{ height: 200 }}
          src={`${event.nbTickets===0 ? "sold_out.png": event.img}`}
        />
        <Card.Body>
          
            <Card.Title>{event.name}</Card.Title>
          
          <Card.Text>Price : {event.price}</Card.Text>
          <Card.Text>Number of tickets : {event.nbTickets}</Card.Text>
          <Card.Text>Number of participants : {event.nbParticipants}</Card.Text>
          <Button variant="primary" onClick={book} disabled={event.nbTickets===0?true:false} >Book an event</Button>
          <Button variant="danger" onClick={()=>setEvent((e)=>({...e,like:!e.like}))}>{event.like ? "DISLIKE" : "LIKE"}</Button>
         
        </Card.Body>
      </Card>
    </Col>
  );
}

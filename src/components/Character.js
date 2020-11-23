// Write your Character component here
import React from 'react';
import { Card, CardTitle, CardText, Container, Row, Col} from 'reactstrap';

export default function Character (props){
    console.log('here are your props', props.arr);
    return (
        <Container>
            <Row>
       {props.arr.map((character) => {
           return(
               <Col xs='5'>
               <Card key={character.created}>
                   <CardTitle>Name: {character.name}</CardTitle>
                     <CardText>Birth Year: {character.birth_year}</CardText>
                     <CardText>Gender: {character.gender}</CardText>
                     <CardText>Eye Color: {character.eye_color}</CardText>
                     <CardText>Height: {character.height}cm</CardText>
                </Card> 
                </Col>
           )
       })}
       </Row>
       </Container>
    )
};
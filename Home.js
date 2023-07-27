import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import solo from './solo.webp'; 
import religious from './religious.webp'; 
import family from './family.webp';
import adventure from './adventure.webp';

const Home = () => {
  return (
    <>
    <h2 class="text-center">Explore destinations by theme!!</h2>
    <CardGroup>
    <Card>
      <Card.Body>
        <Card.Title>Family trips</Card.Title>
        <Card.Img variant="top" src={family} /> 
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">10+ destinations</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Solo trips</Card.Title>
        <Card.Img variant="top" src={solo} /> 
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">200+ destinations</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Religious places</Card.Title>
        <Card.Img variant="top" src={religious} /> 
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">600+ destinations</small>
      </Card.Footer>
    </Card>

    <Card>
      <Card.Body>
        <Card.Title>Adventures</Card.Title>
        <Card.Img variant="top" src={adventure} /> 
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">200+ destinations</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  </>
  )
}

export default Home


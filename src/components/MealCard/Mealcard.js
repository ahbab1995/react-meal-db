import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mealcard = ({food}) => {
    return (
        <div>
           <Row xs={1} md={3} className="g-2">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img  variant="top" src={food.strMealThumb} />
                        <Card.Body>
                        <Card.Title>{food.strMeal}</Card.Title>
                        <Card.Text>
                           {food.strArea}
                        </Card.Text>
                        <Link to={`/card-details/${food.idMeal}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Mealcard;
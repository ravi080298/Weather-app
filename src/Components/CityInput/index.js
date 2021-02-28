import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CityInput = ({ city,setCity,fetchCityWeather }) => {
    const [error,setError]=useState("");
    const handleInputChange =(event) =>{ 
        setCity(event.target.value);
    };
    const handleSubmit = () =>{
        if(!city){
            setError("City Feild is empty");
        }
        else{
            setError("");
            fetchCityWeather();
        }

    }
    return (
        <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control 
                value={city}
                type="text"
                placeholder="Enter City" 
                onChange={handleInputChange}
                 />
                <p className="text-danger">{error}</p>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
        </Container>
    );
};

export default CityInput;
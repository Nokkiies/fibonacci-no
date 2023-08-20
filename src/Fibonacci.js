import React, { useState } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';

function Fibonacci() {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(0);

  const handleIncrement = () => {
    let noIncrement = value + value2;
    setValue(noIncrement);
    setValue2(value);
  };

  const handleDecrement = () => {
    let noDecrement = value - value2;
    if (noDecrement <= 1) {
      setValue(1);
      setValue2(0);
    }
    else {
      setValue(value2);
      setValue2(value - value2);
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="Fibonacci">
        <Col sm={4}>
          <Form.Label>Fibonacci No. is :</Form.Label>{' '}
          <Form.Label> {value} </Form.Label>
        </Col>

        <Button style={{ width: "50px" }} variant="secondary" name="increment" onClick={handleIncrement}>+</Button>{' '}
        <Button style={{ width: "50px" }} variant="secondary" name="decremen" onClick={handleDecrement}>-</Button>
      </Form.Group>
    </Form>
  )
}

export default Fibonacci
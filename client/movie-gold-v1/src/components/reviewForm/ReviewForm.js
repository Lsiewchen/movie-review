import React from 'react'
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} /> {/*ref points to the DOM node of the textarea, as users type into the textarea, its value is stored in revText.current*/}
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm
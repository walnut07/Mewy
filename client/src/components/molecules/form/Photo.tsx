import Form from 'react-bootstrap/Form';

function FormFileExample() {
  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Cat photo</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </>
  );
}

export default FormFileExample;
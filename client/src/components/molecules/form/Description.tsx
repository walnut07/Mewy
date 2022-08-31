import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor="inputDescription">Description</Form.Label>
      <Form.Control
        type="text"
        id="inputDescription"
        aria-describedby="description of the photo"
      />
    </>
  );
}

export default FormTextExample;
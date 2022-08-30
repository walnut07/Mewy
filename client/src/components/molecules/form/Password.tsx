import Form from 'react-bootstrap/Form';

const Password = () => {

  return (
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  );
  
};

export default Password;
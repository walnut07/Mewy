import Form from 'react-bootstrap/Form';

interface Props {
  setBase64: Function
}

const Photo: React.FC<Props> = ({setBase64}) => {

  const getBase64 = (e:any) => {
    const file_reader = new FileReader();
    file_reader.readAsDataURL(e.target.files[0]);

    file_reader.onload = () => {
      const base64 = file_reader.result;
      setBase64(base64);
    };

    file_reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Cat photo</Form.Label>
        <Form.Control type="file" name="photo" onChange={getBase64}/>
      </Form.Group>
    </>
  );
}

export default Photo;
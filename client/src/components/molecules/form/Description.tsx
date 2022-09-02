import Form from 'react-bootstrap/Form';

interface Props {
  isEdit?: boolean;
  description?: string;
}

const Description: React.FC<Props> = ({isEdit, description}) => {
  console.log(isEdit)
  return (
    <>
      <Form.Label htmlFor="inputDescription">Description</Form.Label>
      ({isEdit} ?
        <Form.Control
        type="text"
        id="inputDescription"
        aria-describedby="description of the photo"
        defaultValue={description}
        />
        :
        <Form.Control
        type="text"
        id="inputDescription"
        aria-describedby="description of the photo"
        />
      )
    </>
  );
}

export default Description;
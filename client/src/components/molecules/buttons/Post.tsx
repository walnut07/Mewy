import "../../../Style.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"
import axios from "axios";

interface Props {
  base64: string;
}

interface postResponse {
  Base64: string;
	Latitude: string;
	Longtitude: string;
	Description: string;
}

const Post: React.FC<Props> = ({base64}) => {
  const BASE_URL = process.env.BASE_URL || "http://localhost:8080"
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const form:any = document.forms[0];
    const location = form[2].value.split(",");
    const latitude = location[0];
    const longtitude = location[1];
    const description = form[3].value;
    console.log(latitude, longtitude)
    let response;
    try {
      response = await axios.post<postResponse>(`${BASE_URL}/api/post`, {
        base64: base64,
        latitude: latitude,
        longtitude: longtitude,
        description: description
      })
    } catch (err) {
      console.log(err)
      return
    }
    console.log(response);
  }

  return (
    <Button variant="primary" type="button" onClick={handleSubmit}>
      Post
    </Button>
  );
};

export default Post;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import Card from "../molecules/Card";

interface Post {
  ID: number;
  UserId: string;
  ImageUrl: string;
  Latitude: number;
  Longitude: number;
  Description?: string;
  CreatedAt: string;
  ModifiedAt: string;
}

interface Props {

}

const SinglePhoto: React.FC<Props> = ({}) => {
  const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
  const { id } = useParams();
  const [post, setPost] = useState<Post|null>(null);
  
  const getASinglePhoto = async () => {
    let response: any;
    try {
      response = await axios.get(`${BASE_URL}/api/single`, {
        params: {
          id: id
        }
      })
    } catch (err) {
      console.log(err);
    } finally {
      const result = JSON.parse(response.request.response);
      return result;
    }
  }

  useEffect(() => {
    const result: any = getASinglePhoto();
    const post: Post = result["result"];
    setPost(post);
  }, [])

  return (
    <div className='single-photo'>
      {post && 
      <Card postId={post.ID} userId={post.UserId} imageUrl={post.ImageUrl} latitude={post.Latitude} longitude={post.Longitude} createdAt={post.CreatedAt} modifiedAt={post.ModifiedAt} />
      }
    </div>
  );
};

export default SinglePhoto;
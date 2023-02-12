import { useEffect, useState } from 'react';

import Buttons from "../organisms/EditButtons";
import Card from "../molecules/Card";
import axios from "axios";
import { useParams } from 'react-router';

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
      const data = JSON.parse(response.request.response);
      const result = data["result"];
      setPost(result);
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
      <Card postId={post.ID} userId={post.UserId} imageUrl={post.ImageUrl} description={post.Description}latitude={post.Latitude} longitude={post.Longitude} createdAt={post.CreatedAt} modifiedAt={post.ModifiedAt} />
      }

      {post &&
      <Buttons postId={post.ID} userId={post.UserId} imageUrl={post.ImageUrl} description={post.Description}latitude={post.Latitude} longitude={post.Longitude} createdAt={post.CreatedAt} modifiedAt={post.ModifiedAt}/>
      }
    </div>
  );
};

export default SinglePhoto;
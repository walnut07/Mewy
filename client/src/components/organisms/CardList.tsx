import Card from "../molecules/Card";
import axios from "axios";
import { useEffect, useState } from "react";

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
  latestPosts: Post[];
}

const CardList = () => {
  const BASE_URL = process.env.BASE_URL || "http://localhost:8080"
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  const getLatestPosts = async (limit: number) => {
    let response: any;
    try {
      response = await axios.get(`${BASE_URL}/api/list`, {
        params: {
          limit: limit
        }
      })
    } catch (err) {
      console.log(err);
    } finally {
      const result = JSON.parse(response.request.response);
      const posts: Post[] = result["result"];
      setLatestPosts(posts);
    }
  }

  useEffect(() => {
    getLatestPosts(10);
  }, []);

  return (
    <section className="flex-wrap">
      {latestPosts.map(post => {
        return <Card postId={post.ID} userId={post.UserId} imageUrl={post.ImageUrl} latitude={post.Latitude} longitude={post.Longitude} description={post.Description} createdAt={post.CreatedAt} modifiedAt={post.ModifiedAt}/>
      })}
    </section>
  );
};

export default CardList;


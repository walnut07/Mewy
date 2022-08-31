import Card from "../molecules/Card";

interface Post {
  userId: string;
  latitude: number;
  longitude: number;
  description?: string;
  createdAt: string;
  modifiedAt: string;
}

interface Props {
  latestPosts: Post[];
}

const CardList = () => {

  // Test data
  const dummy = [
    {
      userId: "taensj",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/mewy-d966b.appspot.com/o/images%2Fjavascript.png?alt=media&token=b5e65ea6-d412-4e5b-9f18-fde8d742e5e0",
      latitude: 10.2242,
      longitude: 24.4124,
      description: "kawaii",
      createdAt: "2022-08-31 14:22:24.969143+09",
      modifiedAt: "2022-08-31 14:22:24.969143+09",
    },
    {
      userId: "geasj",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/mewy-d966b.appspot.com/o/images%2Fjavascript.png?alt=media&token=b5e65ea6-d412-4e5b-9f18-fde8d742e5e0",
      latitude: 19.2242,
      longitude: 240.4124,
      description: "kimoi",
      createdAt: "2022-08-31 14:22:24.969143+09",
      modifiedAt: "2022-08-31 14:22:24.969143+09",
    }
  
  ]

  return (
    <section className="flex-wrap">
      {dummy.map(post => {
        return <Card userId={post.userId} imageUrl={post.imageUrl} latitude={post.latitude} longitude={post.longitude} description={post.description} createdAt={post.createdAt} modifiedAt={post.modifiedAt}/>
      })}
    </section>
  );
};

export default CardList;


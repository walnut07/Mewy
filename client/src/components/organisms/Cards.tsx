import Card from "../molecules/Card";

interface Props {

}

const Cards: React.FC<Props>  = ({}) => {

  const modelData = [
    {
      userId: "model",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/mewy-d966b.appspot.com/o/images%2Fgolang.png?alt=media&token=c23cceb5-703f-4d60-a7fb-8d4b94b6877a",
      latitude: 12.04042,
      longitude: 15.42191,
      description: "I'm Gopher",
      createdAt: "2020-10-10",
      modifiedAt: "2020-10-10",
    }
  ]

  return (
    <section className="flex-wrap">
      {modelData.map(data => {
        return <Card userId={data.userId} imageUrl={data.imageUrl} latitude={data.latitude} longitude={data.longitude} description={data.description} createdAt={data.createdAt} modifiedAt={data.modifiedAt}/>
      })}
    </section>
  );
};

export default Cards;
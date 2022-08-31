import "../../Style.css";
import Title from "../organisms/MainLeft";
import Cards from "../organisms/Cards";

const Home = () => {
  return (
    <div className="d-md-flex h-md-100 align-items-center">

      <div className="col-md-6 p-0 bg-indigo h-md-100">
          <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
              <div className="logoarea pt-5 pb-5">
                <Title />
              </div>
          </div>
      </div>

      <div className="col-md-6 p-0 bg-indigo h-md-100">
          <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center text-white">
              <Cards />
          </div>
      </div>
        
    </div>
  );
};

export default Home;
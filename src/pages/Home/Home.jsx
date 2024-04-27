import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const painting_drawing = useLoaderData();
  console.log(painting_drawing);
  return (
    <>
      <div>
        <Banner sliderData={painting_drawing} />
      </div>
      <div className="px-4 md:px-3 lg:px-12 my-12">
        <h2 className="text-4xl font-playFair font-extrabold text-center">
          <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
            Aurora Artify & Craft Emporium
          </span>
        </h2>
      </div>
    </>
  );
};
export default Home;

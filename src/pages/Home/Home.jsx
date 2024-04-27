import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CraftCard from "../../components/CraftCard/CraftCard";

const Home = () => {
  const painting_drawing = useLoaderData();
  console.log(painting_drawing);
  return (
    <>
      <div>
        <Banner sliderData={painting_drawing} />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-12 my-12">
        <div className="text-center py-8">
          <h2 className="text-4xl font-playFair font-extrabold text-center">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              Most Popular Craft Items
            </span>
          </h2>
          <p className="mt-5 leading-8">
            Explore our most popular craft items, curated for their quality,
            creativity, and artisanal charm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {painting_drawing.map((craft) => (
            <CraftCard key={craft.id} craft={craft} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;

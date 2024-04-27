import { useLoaderData } from "react-router-dom";
import CraftCard from "../../components/CraftCard/CraftCard";

const AllArtCraft = () => {
  const allArt_Craft = useLoaderData();
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="text-center pt-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              All Art & Craft Items
            </span>
          </h2>
          <p className="py-5 leading-8">
            Explore our diverse collection of artisanal treasures, featuring a
            wide array of meticulously crafted art and craft items to ignite
            your creativity and adorn your space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {allArt_Craft.map((craft) => (
            <CraftCard key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllArtCraft;

import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllArtCraft = () => {
  const allArt_Craft = useLoaderData();
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="text-center pt-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={[`All Art & Craft Items`]}
                loop={50}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="py-5 leading-8">
            Explore our diverse collection of artisanal treasures, featuring a
            wide array of meticulously crafted art and craft items to ignite
            your creativity and adorn your space.
          </p>
        </div>
        <div className="overflow-x-auto my-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th></th>
                <th>Photo & Craft Name</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* dynamic row */}
              {allArt_Craft.map((craft, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20">
                          <img src={craft.image} alt={craft.item_name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{craft.item_name}</div>
                        <div className="text-sm opacity-50">
                          {craft.subcategory_name}{" "}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    $
                    <span className="badge badge-ghost badge-sm">
                      {craft.price}
                    </span>
                  </td>
                  <td>{craft.stock_status}</td>
                  <th>
                    <Link
                      to={`/crafts/${craft._id}`}
                      className="btn px-6 border-none uppercase text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
                    >
                      View Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllArtCraft;

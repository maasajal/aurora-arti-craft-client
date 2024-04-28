import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const CraftDetail = () => {
  const craftItem = useLoaderData();

  const {
    _id,
    item_name,
    image,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_email,
    user_name,
  } = craftItem;
  return (
    <>
      <div className="text-center my-8 max-w-6xl mx-auto px-3">
        <div className="text-center pt-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={[`Detail of ${item_name}`]}
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
            Dive into the intricate details of our captivating craft pieces on
            our dynamic Craft Detail page, where every stroke, texture, and
            element tells a story of creativity and craftsmanship, inviting you
            to explore and appreciate the artistry behind each creation.
          </p>
        </div>
        <figure>
          <img className="rounded-xl" src={image} alt={item_name} />
        </figure>
        <div className="card-body">
          <p className="flex justify-between">
            <span>By: {user_name}</span>
            <span>Mail: {user_email}</span>
            <span>{stock_status}</span>
          </p>
          <h2 className="text-3xl">{item_name} </h2>
          <h3 className="text-lg font-semibold">
            <span>Category: {subcategory_name}</span>{" "}
          </h3>
          <h3 className="text-lg font-semibold">
            <span>Customization: {customization}</span>{" "}
          </h3>
          <h3 className="text-lg font-semibold">
            <span>Processing Time: {processing_time}</span>{" "}
          </h3>
          <p className="flex justify-between">
            <span>Price: ${price}</span> <span>Rating: {rating}</span>
          </p>
          <p className="mb-4 leading-8">{short_description}</p>
          <div className="card-actions"></div>
        </div>
      </div>
    </>
  );
};
export default CraftDetail;

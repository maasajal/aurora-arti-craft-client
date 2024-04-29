import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const navigate = useNavigate();
  const loadCraft = useLoaderData();

  const handleCraftEdit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const updateCraft = {
      item_name,
      subcategory_name,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      short_description,
      image,
    };
    console.log(updateCraft);

    try {
      const response = await fetch(
        `https://aurora-articraft.vercel.app/crafts/${loadCraft._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCraft),
        }
      );
      const data = await response.json();
      //   console.log(data);
      form.reset();
      navigate("/my-art-craft-list");
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Craft update successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        title: "Error!",
        text: `An error occurred while updating the craft. Please try again later. ${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="text-center my-8 mx-auto max-w-6xl px-3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update your Craft | Painting & Drawing</title>
      </Helmet>
      <div className="text-center pt-24 max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold font-playFair">
          <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
            <Typewriter
              words={[`Update Craft Item`]}
              loop={50}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <h2 className="text-5xl font-extrabold font-playFair py-5">
          <span className="bg-gradient-to-r from-yellow-700 via-pink-600 to-purple-500 text-transparent bg-clip-text">
            <Typewriter
              words={[`${loadCraft.item_name}`]}
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
          The Update Craft Item page empowers users to refine and enhance their
          listed arts and crafts effortlessly. With intuitive controls, users
          can modify details, adjust imagery, and refine descriptions, ensuring
          their creations always shine in the best light.
        </p>
      </div>
      <div className="mx-auto p-12 md:py-12 md:px-28 bg-slate-300 rounded-xl">
        <form onSubmit={handleCraftEdit} className="mt-10">
          {/* Form first row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Item Name</label>
              <input
                type="text"
                id="item_name"
                name="item_name"
                defaultValue={loadCraft.item_name}
                placeholder="Enter craft name..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Subcategory Name</label>
              <input
                type="text"
                id="subcategory_name"
                name="subcategory_name"
                placeholder="Enter craft subcategory name..."
                defaultValue={loadCraft.subcategory_name}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form second row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Price</label>
              <input
                type="float"
                id="price"
                name="price"
                placeholder="Enter craft price..."
                defaultValue={loadCraft.price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                placeholder="Enter coffee rating..."
                defaultValue={loadCraft.rating}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form third row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Customization</label>
              <select
                className="select input input-bordered"
                name="customization"
                required
                defaultValue={loadCraft.customization}
              >
                <option disabled>Is the item customizable?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">Processing Time</label>
              <input
                type="text"
                id="processing_time"
                name="processing_time"
                placeholder="Enter processing time..."
                defaultValue={loadCraft.processing_time}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form forth row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Stock Status</label>
              <select
                className="select input input-bordered"
                name="stock_status"
                required
                defaultValue={loadCraft.stock_status}
              >
                <option disabled>What is stock status?</option>
                <option>Made to Order</option>
                <option>In stock</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">Image</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Enter image url..."
                defaultValue={loadCraft.image}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form fifth row */}
          <div className="form-control mb-5">
            <label className="label">Short Description</label>
            <textarea
              type="textarea"
              id="short_description"
              name="short_description"
              placeholder="Enter short description..."
              defaultValue={loadCraft.short_description}
              className="textarea input-bordered"
              required
            />
          </div>
          {/* form submit button */}
          <div className="form-control mt-6">
            <button className="btn text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateCraft;

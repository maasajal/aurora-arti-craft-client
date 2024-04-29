import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const AddCraftItem = () => {
  const navigate = useNavigate();
  const handleAddCraft = async (e) => {
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
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const addCraftItem = {
      item_name,
      subcategory_name,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      short_description,
      image,
      user_email,
      user_name,
    };
    console.log(addCraftItem);

    try {
      const response = await fetch(
        "https://aurora-articraft.vercel.app/crafts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addCraftItem),
        }
      );
      const data = await response.json();
      //   console.log(data);
      form.reset();
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "New craft item added successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/my-art-craft-list");
      }
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        title: "Error!",
        text: `An error occurred while adding the craft. Please try again later. ${error.message}`,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="text-center my-8 mx-auto max-w-6xl px-3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Craft | Painting & Drawing</title>
      </Helmet>
      <div className="text-center pt-24 max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold font-playFair">
          <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
            <Typewriter
              words={["Add a Craft Item"]}
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
          Bring your artistic vision to life by adding your unique craft items
          to our vibrant marketplace with ease and convenience, connecting with
          a community of art enthusiasts and creators.
        </p>
      </div>
      <div className="mx-auto p-12 md:py-12 md:px-28 bg-slate-300 rounded-xl">
        <form onSubmit={handleAddCraft} className="mt-10">
          {/* Form first row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Item Name</label>
              <input
                type="text"
                id="item_name"
                name="item_name"
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
              >
                <option disabled selected>
                  Is the item customizable?
                </option>
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
              >
                <option disabled selected>
                  What is stock status?
                </option>
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
              className="textarea input-bordered"
              required
            />
          </div>
          {/* Form sixth row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">User Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Enter user email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">User Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Enter user name..."
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form submit button */}
          <div className="form-control mt-6">
            <button className="btn text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCraftItem;

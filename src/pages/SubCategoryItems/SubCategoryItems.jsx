import { useLoaderData, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import CraftCard from "../../components/CraftCard/CraftCard";

const SubCategoryItems = () => {
  const subcategoryData = useLoaderData();
  const subCategory = useParams();
  // console.log(subcategoryData, subCategory);
  const filteredSubCategory = subcategoryData.filter(
    (category) => category.subcategory_name === subCategory.subcategory_name
  );
  // console.log(filteredSubCategory);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="text-center pt-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={[`My Art & Craft List`]}
                loop={50}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <Fade>
            <p className="py-5 leading-8">
              My Art & Craft List is a private and secure route where users can
              view all the arts and crafts they have personally added to the
              database. Each user has exclusive access to their own collection,
              presented in beautifully designed cards for easy browsing and
              appreciation of their creative contributions
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {filteredSubCategory.map((subCat) => (
            <CraftCard key={subCat._id} craft={subCat} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubCategoryItems;

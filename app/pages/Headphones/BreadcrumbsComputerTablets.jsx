import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BreadcrumbsShop = ({ categories }) => {
  return (
    <nav className="py-3">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-gray-600">
          <li>
            <Link href="/">
              <p className="text-gray-600">Home</p>
            </Link>
          </li>
          <IoIosArrowForward className="text-black fa fa-chevron-right" />
          {categories.map((category, index) => (
            <>
            <div key={index} className="flex items-center">
              {index > 0 && (
                <IoIosArrowForward className=" text-black fa fa-chevron-right" />
              )}
              <li>{category}</li>
            </div>
            </>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbsShop;

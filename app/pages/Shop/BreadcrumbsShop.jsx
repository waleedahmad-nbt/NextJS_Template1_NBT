import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BreadcrumbsShop = () => {
  return (
    <nav className="py-3">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-gray-600">
          <li>
            <Link href="/">
              <p className="text-gray-600">Home</p>
            </Link>
          </li>
          <IoIosArrowForward className="ml-3 text-black fa fa-chevron-right" />
          <li>Products</li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbsShop;

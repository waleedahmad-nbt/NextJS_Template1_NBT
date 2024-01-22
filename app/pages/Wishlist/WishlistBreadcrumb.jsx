import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const WishlistBreadcrumb = () => {
  return (
    <nav className="p-6">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-black">
          <li>
            <Link href="/">
              <p className="text-gray-600">Home</p>
            </Link>
          </li>
          <IoIosArrowForward className="ml-3 text-black fa fa-chevron-right" />
          <li>Wishlist</li>
        </ol>
      </div>
    </nav>
  );
};

export default WishlistBreadcrumb;

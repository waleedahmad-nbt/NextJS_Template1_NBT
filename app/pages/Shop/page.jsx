"use client";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Drawer from "./Drawer";
import BreadcrumbsShop from "./BreadcrumbsShop";

const page = () => {

  return (
    <>
      <BreadcrumbsShop />
      <div className="xl:container xl:mx-auto">
        <div className="mt-20 mx-10">
          <h1 className="text-4xl font-bold text-center text-gray-900">Shop</h1>

          <div className="flex flex-row gap-4">
            <div className="w-[250px] hidden lg:block h-full">
              <Sidebar />
            </div>

            <div className="block lg:hidden">
              <div
                className="fixed inset-0 top-0 z-40 left-0 h-24 flex items-center -mx-3 m-auto w-10 mt-[11rem] bg-[#EEEEEE]
                 text-black hover:bg-black hover:text-white rounded-sm"
              >
                <Drawer />
              </div>
            </div>

            <div className="w-full">
              <Products className="md:mx-6" />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

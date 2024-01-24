"use client";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Drawer from "./Drawer";
import BreadcrumbsShop from "./BreadcrumbsShop";
import { useState } from "react";

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize,setSelectedSize]=useState(null);
  const [selectedType,setSelectedType]=useState(null);

  return (
    <>
      <BreadcrumbsShop />
      <div className="xl:container xl:mx-auto">
        <div className="mt-20 mx-1 lg:mx-10">
          <h1 className="text-4xl font-bold text-center text-gray-900">Shop</h1>

          <div className="flex flex-row gap-0 sm:gap-4">
            <div className="w-[250px] hidden lg:block h-full">
              <Sidebar
                setSelectedCategory={setSelectedCategory}
                setSelectedPriceRange={setSelectedPriceRange}
                setSelectedColor={setSelectedColor}
                setSelectedSize={setSelectedSize}
                setSelectedType={setSelectedType}
              />
            </div>


            <div className="w-full">
              <Products
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                selectedType={selectedType}
                className="md:mx-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

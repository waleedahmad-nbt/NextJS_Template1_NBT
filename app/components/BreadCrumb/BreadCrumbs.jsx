import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <>
      <section className="py-5 sm:py-7">
        <div className="container max-w-screen-xl mx-auto px-4">
          <ol className="inline-flex flex-wrap text-black space-x-1 md:space-x-3 items-center">
            {breadCrumbs?.map((breadCrumb, index) => (
              <li className="inline-flex items-center">
                <Link href={breadCrumb.url} className="text-black">
                  {breadCrumb.name}
                </Link>
                {breadCrumbs?.length - 1 !== index && (
                  <IoIosArrowForward className="ml-3 text-black fa fa-chevron-right" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default BreadCrumbs;

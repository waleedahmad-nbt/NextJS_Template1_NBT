import React from "react";
import SignIn from "./SignIn";
import { Register } from "./Register";
import BreadcrumbsAccount from "./BreadcrumbsAccount";

const page = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <BreadcrumbsAccount />
      <div className="flex lg:flex-row flex-col gap-16 mx-1 sm:mx-3 mt-24">
        <SignIn />
        <Register />
      </div>
    </div>
  );
};

export default page;

import { useLoadingContext } from "@/app/LoadingContext";
import React from "react";

const Loader = () => {
  const { loading } = useLoadingContext();

  return loading && <div className="loader"></div>;
};

export default Loader;

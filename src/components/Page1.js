import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Page1 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      Page1: {JSON.stringify(data)}
      <hr />
    </div>
  );
};

export default Page1;

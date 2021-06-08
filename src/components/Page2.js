import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Page21 from "./Page21";

const Page2 = () => {
  const data = useContext(DataContext);

  return (
    <>
      <div>
        Page2: {JSON.stringify(data)}
        <hr />
      </div>

      <Page21 />
    </>
  );
};

export default Page2;

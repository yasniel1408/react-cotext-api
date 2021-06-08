import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const newData = {
  user: "tito",
  age: 2,
};

const Page21 = () => {
  const {data, setData} = useContext(DataContext);

  return (
    <div>
      Page21: {JSON.stringify(data)}
      <button onClick={()=>setData(newData)}>Cambiar Data</button>
      <hr />
    </div>
  );
};

export default Page21;

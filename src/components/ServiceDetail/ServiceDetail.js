import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "./Details";

const ServiceDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactData = data.filter((pd) => pd._id === id);

  return (
    <div>
      {ExactData.map((td) => (
        <Details key={td._id} td={td}></Details>
      ))}
    </div>
  );
};

export default ServiceDetail;

import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
const APIComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let isMounted = true;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};

export default APIComponent;

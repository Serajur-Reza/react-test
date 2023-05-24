import fetch from "node-fetch";
import React, { useEffect, useState } from "react";

function useAPI() {
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

  return data;
}

export default useAPI;

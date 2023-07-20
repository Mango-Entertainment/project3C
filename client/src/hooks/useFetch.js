import React, {useState, useEffect} from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    setTimeout(() => getData(), "5000");
  }, []);

  return {data, loading};
};

export default useFetch;

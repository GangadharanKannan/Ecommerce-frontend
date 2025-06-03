import { useEffect, useState } from "react";


const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
      setLoading(true)
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products || data);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setData([]);
        setLoading(false)
      });
  }, []);

  return {
    data,loading
  }
};

export default useFetch;

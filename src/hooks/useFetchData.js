import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        setIsError(true);
        setError(err.message);
      });
  }, [url]);

  return { data, error, isError };
}

export default useFetchData;

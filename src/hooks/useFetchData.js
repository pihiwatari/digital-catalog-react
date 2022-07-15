import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, error, isError, isLoading };
}

export default useFetchData;

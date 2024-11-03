import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import axios from "axios";

export const useDebounceSearch = ({endpoint,delay,page,limit}) => {
    const [results, setResults] = useState([]);
    const [querySearch,setQuerySearch] = useState("")
  const [error, setError] = useState(null);

  const debouncedFetchUsers = useCallback(
    debounce(async (searchQuery) => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No auth token found");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: {
            ...(searchQuery.trim() && { query: searchQuery }),
            page: page,
            limit: limit,
          },
        };

        const response = await axios.get(endpoint, config);

        setResults(response.data.user);
        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching search results");
        console.error("Error fetching search results:", err);
      }
    }, delay),
    [page, limit, endpoint, delay]
  );

  const handleSearch = (e) => {
      const newQuery = e.target.value;
        setQuerySearch(newQuery)
    debouncedFetchUsers(newQuery);
  };


  useEffect(() => {
    return () => {
      debouncedFetchUsers.cancel();
    };
  }, [debouncedFetchUsers]);

  return { results,querySearch, error, handleSearch };
};

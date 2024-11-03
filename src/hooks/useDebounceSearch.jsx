import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import axios from "axios";

export const useDebounceSearch = ({ endpoint, delay, page, limit }) => {
  const [results, setResults] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(
    async (searchQuery) => {
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

        setResults(response.data.users || []);
        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching search results");
        console.error("Error fetching search results:", err);
      }
    },
    [endpoint, limit, page]
  );

  const debouncedSearch = useCallback(
    debounce((searchQuery) => fetchUsers(searchQuery), delay),
    [fetchUsers, delay]
  );

  const handleSearch = (e) => {
    const newQuery = e.target.value;
    setQuerySearch(newQuery);
    debouncedSearch(newQuery);
  };

  useEffect(() => {
    fetchUsers("default");

    return () => {
      debouncedSearch.cancel();
    };
  }, [fetchUsers, debouncedSearch]);

  return { results, querySearch, error, handleSearch };
};

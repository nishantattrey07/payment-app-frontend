import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useSingleCallSearch = ({ endpoint }) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const response = useCallback(async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No auth token found");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        
      };

        const response = await axios.get(endpoint, config);
        console.log(response.data.users);
        
      setResult(response.data.users || []);
      setError(null);
    } catch (err) {
      setError(err.message || "Error fetching search results");
      console.error("Error fetching search results:", err);
    }
  }, [endpoint]);

  useEffect(() => {
    response();
  }, [response]);

    console.log(result);
    
  return { result, error };
};

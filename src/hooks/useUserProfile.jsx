import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { UserProfile } from "../store/atoms/user";

export const useUserProfile = () => {
  const [profile, setProfile] = useRecoilState(UserProfile);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No auth token found");

        const response = await axios.get(
          "http://localhost:3000/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setProfile(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, [setProfile]);

  return { profile, error };
};



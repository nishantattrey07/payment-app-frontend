import { useEffect,useState } from "react";
import AppBar from "./AppBar";
import axios from "axios";

export default function Dashboard() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        username: "",
        _id: "",
    });
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem("authToken");
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
        } catch (error) {
          setError(error);
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    }, []);
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!profile) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="">
          <AppBar name={profile.firstName}/>
        </div>
      </>
    );
}
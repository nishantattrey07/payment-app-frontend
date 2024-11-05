import AppBar from "../components/AppBar";
import { Balance } from "../components/Balance";
import { useUserProfile } from "../hooks/useUserProfile";
import { useUserBalance } from "../hooks/useUserBalance";
import { Users } from "../components/Users";
import { useSetRecoilState } from "recoil";
import { token } from "../store/atoms/user";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { profile, error } = useUserProfile();
  const { balance, error1 } = useUserBalance();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(token);

  const handleLogout = () => { 
    localStorage.removeItem("authToken");
    navigate('/signin');
  }

  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    navigate('/login');
  } else {
    setToken(authToken);
  }

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }
  if (error1) {
    return <div className="error-message">Error: {error1.message}</div>;
  }

  if (!profile) {
    return <div className="loading-message">Loading...</div>;
  }
  if (!balance) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div>
      <AppBar
        name={profile.firstName}
        nameFirstLetter={profile.firstName[0]}
        onClick={handleLogout}
      />

      <div className="p-4 mt-4 mx-4">
        <Balance Balance={balance} />
      </div>

      <div className="p-4 mt-4 mx-4">
        <Users />
      </div>
    </div>
  );
}

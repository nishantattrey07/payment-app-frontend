import AppBar from "../components/AppBar";
import { Balance } from "../components/Balance";
import { useUserProfile } from "../hooks/useUserProfile";
import { useUserBalance } from "../hooks/useUserBalance";
import { Users } from "../components/Users";

export default function Dashboard() {
  const { profile, error } = useUserProfile();
  const {balance, error1} = useUserBalance();

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
      <AppBar name={profile.firstName} nameFirstLetter={profile.firstName[0]} />

      <div className="p-4 mt-4 mx-4">
        <Balance Balance={balance}/>
      </div>

      <div>
        <Users/>
      </div>
    </div>
  );
}

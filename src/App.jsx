import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SendMoney from "./pages/SendMoney";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import PaymentCompleted from "./pages/PaymentCompleted";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={<Dashboard />} />}
            />
            <Route
              path="/sendmoney"
              element={<PrivateRoute component={<SendMoney />} />}
            />
            <Route
              path="/paymentCompleted"
              element={<PrivateRoute component={<PaymentCompleted />} />}
            />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;

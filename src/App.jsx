
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Dashboard from "./components/Dashboard";
import  SendMoney  from './components/SendMoney';
import  LandingPage from './components/LandingPage';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sendmoney" element={<SendMoney />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App

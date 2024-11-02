import { useRecoilState } from "recoil";
import { useCallback, memo } from "react";
import InputBox from "./InputBox";
import { FirstName, LastName, Email, Password } from "../store/atoms/forms";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
  const [firstName, setFirstName] = useRecoilState(FirstName);
  const [lastName, setLastName] = useRecoilState(LastName);
  const [email, setEmail] = useRecoilState(Email);
  const [password, setPassword] = useRecoilState(Password);


  const handleFirstNameChange = useCallback(
    (value) => {
      setFirstName(value);
    },
    [setFirstName]
  );

  const handleLastNameChange = useCallback(
    (value) => {
      setLastName(value);
    },
    [setLastName]
  );

  const handleEmailChange = useCallback(
    (value) => {
      setEmail(value);
    },
    [setEmail]
  );

  const handlePasswordChange = useCallback(
    (value) => {
      setPassword(value);
    },
    [setPassword]
  );


  const handleClick = useCallback(() => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }, [setFirstName, setLastName, setEmail, setPassword]);

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-xl rounded max-w-[400px] min-w-[265px]">
        <div>
          <h4 className="text-4xl font-bold mb-2 pt-6">Sign Up</h4>
          <p className="text-[#6a7280] px-4 pb-4 mb-4 pt-1">
            Enter your information to create an account
          </p>
        </div>
        <div className="text-left mx-4 text-sm font-medium py-1 flex flex-col justify-between">
          <InputBox
            label="FirstName"
            placeholder="John"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <InputBox
            label="LastName"
            placeholder="Doe"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <InputBox
            label="Email"
            placeholder="nishant@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <InputBox
            label="Password"
            placeholder="123456"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mx-4">
          <button
            onClick={handleClick}
            type="button"
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign Up
          </button>
          <div className="py-2 text-sm mb-3 flex justify-center">
            <div>Already have an account?</div>
                      <a className="pointer underline pl-1 cursor-pointer" onClick={() => {navigate("/signin")}}>Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUp);

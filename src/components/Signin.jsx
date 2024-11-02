import { useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import { useCallback, useState } from "react";
import axios from "axios";

export default function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = useCallback((value) => {
        setUsername(value);
        
    },[setUsername])

    const handlePasswordChange = useCallback((value) => { 
        setPassword(value);
    },[setPassword])


    const handleClick = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin"
            , { 
                username,
                password
                });
            const token = response.data.token;
            localStorage.setItem("authToken", token);
            navigate("/dashboard");
        }
        catch (err) {
            console.error('Error signing in:', err);
        }

        setUsername("")
        setPassword("")
    };

    const transferPage = () => {
        navigate("/signup");
}
    return (
      <>
        <div className="flex justify-center items-center">
          <div className=" shadow-xl ">
            <div>
              <h1 className="text-3xl font-bold mb-2 pt-6">Sign In</h1>
              <p className="text-[#6a7280] px-4 pb-4 pt-1 ">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="text-left mx-4 text-sm font-medium py-1 flex flex-col justify-between">
              <InputBox
                label={"Email"}
                placeholder={"nishant@gmail.com"}
                value={username}
                onChange={handleEmailChange}
              />

              <InputBox
                label={"Password"}
                type={"password"}
                placeholder={"password"}
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="p-4">
              <button
                onClick={handleClick}
                type="button"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign In
              </button>
              <div className="py-2 text-sm mb-3 flex justify-center">
                <div>Don&apos;t have an account?</div>
                <a className="pointer underline pl-1 cursor-pointer" onClick={transferPage}>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
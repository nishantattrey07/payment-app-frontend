import { useRecoilValue } from "recoil";
import { sendToUserFullName, token, toUsername } from "../store/atoms/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SendMoney = () => {
    const toUserFullName = useRecoilValue(sendToUserFullName);
    const tousername = useRecoilValue(toUsername);
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const userToken = useRecoilValue(token);

    const handlePress = async () => {
        try {
            if (amount <= 0) {
                alert("Minimum Transaction amount is 1");
                throw new Error("Amount must be greater than 0");
            }
            const response = await axios.post(
              "http://localhost:3000/api/v1/account/transfer",
              {
                from: userToken,
                to: tousername,
                amount: amount,
              },
              {
                headers: {
                  Authorization: `Bearer ${userToken}`,
                  "Content-Type": "application/json",
                },
              }
            );

            console.log(response);
            
            navigate("/paymentCompleted");
        }
        catch (error) {
            console.error("Error sending money:", error);
        }
        
    }

  return (
    <div className="flex items-center justify-center min-h-screen min-w-[600px] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[500px] min-h-[400px] flex flex-col">
        <div>
          <h1 className="text-3xl font-bold text-center mt-4">Send Money</h1>
        </div>
        <div className="flex mt-10 py-8 px-4 items-center">
          <div className="rounded-full px-6 py-4 mx-4 my-4 bg-green-400 text-xl text-white font-bold">
            {toUserFullName[0]}
          </div>
          <div className="text-2xl font-semibold">{toUserFullName}</div>
        </div>
        <div className="flex flex-col mt-6 px-4">
          <label className="text-gray-600">Amount (in Rs)</label>
          <input
            type="number"
            placeholder="Enter amount"
                      className="mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            value={amount}
                      onChange={(e) => {setAmount(e.target.value)}}
          />
          <button className="mt-6 bg-green-400 text-white py-3 rounded-md hover:bg-green-500 transition-colors" onClick={handlePress}>
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;

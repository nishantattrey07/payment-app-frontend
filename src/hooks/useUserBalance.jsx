import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserBalance } from "../store/atoms/user";

export const useUserBalance = () => { 
    const [balance, setBalance] = useRecoilState(UserBalance);
    const [error, setError] = useState(null);

    useEffect(() => { 
        const fetchBalance = async () => { 
            try {
                const token = localStorage.getItem("authToken");
                if (!token) throw new Error("No auth token found");
                const response = await axios.get(
                  "http://localhost:3000/api/v1/account/balance",
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                    }
                  }
                );
                setBalance(response.data.balance);
             }
            catch (err) { 
                setError(err);
                console.error("Error fetching balance:", err);
            }
        }
        fetchBalance();
    })

    return {balance,error}
    
}
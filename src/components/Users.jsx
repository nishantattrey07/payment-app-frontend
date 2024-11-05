import { useNavigate } from "react-router-dom";
import { useDebounceSearch } from "../hooks/useDebounceSearch";
import { useSetRecoilState } from "recoil";
import { sendToUserFullName,toUsername } from "../store/atoms/user";

export const Users = () => {
  const setSendToUserFullName = useSetRecoilState(sendToUserFullName);
  const setToUsername = useSetRecoilState(toUsername);
  const navigate = useNavigate();

  const endpoint = "http://localhost:3000/api/v1/user/searchUsers";
  const { delay, page, limit } = { delay: 300, page: 1, limit: 5 };

  const {
    results = [],
    querySearch,
    handleSearch,
  } = useDebounceSearch({ endpoint, delay, page, limit });

  console.log(results);

  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold">Users</h1>
      </div>

      <div className="m-2">
        <input
          placeholder="Search users..."
          className="rounded py-1 px-2 w-full min-w-[300px] border border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
          value={querySearch || ""}
          onChange={handleSearch}
        />
      </div>

      <div className="mt-4">
        <ul>
          {Array.isArray(results) && results.length > 0 ? (
            results.map((user) => (
            
              <div
                key={user._id}
                className="p-2 border-b border-gray-300 flex justify-between min-w-[300px]"
              >
                <div className="flex gap-2 items-center">
                  <div className="bg-gray-300 rounded-full px-4 py-2">
                    {user.firstName[0]} </div>
                  <h1 className="font-normal">
                    {user.firstName} {user.lastName}
                  </h1>
                </div>

                <button className="px-5 py-1 bg-black bordered rounded text-white text-sm" onClick={() => {
                  setToUsername(user.username);
                  setSendToUserFullName(user.firstName + " " + user.lastName);
                  navigate("/SendMoney")
                }}>
                  Send Money
                </button>
              </div>
            ))
          ) : (
            <li className="text-gray-500 p-2">No users found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Users;

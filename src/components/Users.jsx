// Users.jsx
import { useDebounceSearch } from "../hooks/useDebounceSearch";

export const Users = () => {
  const endpoint = "http://localhost:3000/api/v1/user/searchUsers";
  const { delay, page, limit } = { delay: 300, page: 1, limit: 2 };

  const { results = [], querySearch, handleSearch } = useDebounceSearch({endpoint,delay,page,limit});

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
              <li key={user.id} className="p-2 border-b border-gray-300">
                {user.username}
              </li>
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

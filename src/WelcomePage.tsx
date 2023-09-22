import SearchBar from "./Components/SearchBar";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const logout = async () => {
    const res = await fetch(
      `https://frontend-take-home-service.fetch.com/auth/logout`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Fail to logout.`);
    }
    navigate("/");
  };
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-neutral-700 p-6">
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Logout
          </button>
        </div>
      </nav>
      <SearchBar />
    </div>
  );
};
export default WelcomePage;

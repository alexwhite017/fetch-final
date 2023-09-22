import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const logIn = async () => {
    const body = {
      name: name,
      email: email,
    };
    const res = await fetch(
      `https://frontend-take-home-service.fetch.com/auth/login`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Authentication not completed.`);
    } else {
      navigate("/search");
    }
  };

  return (
    <form>
      <div className="flex flex-col justify-center items-center mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="name"
          id="name"
          className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </div>
      <div className="flex flex-col justify-center items-center mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <div className="flex flex-col justify-center items-center mb-6">
        <button
          onClick={(e) => {
            e.preventDefault();
            logIn();
          }}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
    /*<form
      onSubmit={(e) => {
        e.preventDefault();
        logIn();
      }}
    >
      <label htmlFor="name">
        Name:
        <input
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>*/
  );
};
export default LoginPage;

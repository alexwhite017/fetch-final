import { useEffect, useState } from "react";
import Results from "./Results";
import SelectedDogs from "./SelectedDogs";
const SearchBar = () => {
  const [breeds, setBreeds] = useState([]);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [location, setLocation] = useState("");

  const [requestData, setRequestData] = useState({
    breeds: "" as string,
    minAge: "" as string,
    maxAge: "" as string,
    location: "" as string,
    sortField: "" as string,
    order: "" as string,
    amount: "" as string,
  });
  useEffect(() => {
    async function getBreeds() {
      const res = await fetch(
        `https://frontend-take-home-service.fetch.com/dogs/breeds`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await res.json();

      setBreeds(data);
    }

    getBreeds();
  }, []);
  return (
    <div>
      <div className="search-bar flex flex-col justify-center items-center mb-6 text-white bg-neutral-700 p-1.5 w-1/3 h-auto mt-10 mx-auto rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const obj = {
              breeds: formData.get("breed")?.toString() ?? "",
              minAge: minAge ?? "",
              maxAge: maxAge ?? "",
              location: location ?? "",
              sortField: formData.get("sortField")?.toString() ?? "",
              order: formData.get("order")?.toString() ?? "",
              amount: formData.get("amount")?.toString() ?? "",
            };
            setRequestData(obj);
          }}
        >
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="breed"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a Breed
              </label>
              <select
                id="breed"
                name="breed"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected></option>
                {breeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Zip Code
              </label>
              <input
                type="location"
                id="location"
                className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Zip Code"
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor="minAge"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Minimum Age
              </label>
              <input
                type="minAge"
                id="minAge"
                className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Minimum Age"
                onChange={(e) => setMinAge(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor="maxAge"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Maximum Age
              </label>
              <input
                type="maxAge"
                id="maxAge"
                className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Maximum Age"
                onChange={(e) => setMaxAge(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <label
              htmlFor="sortField"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sorting Options
            </label>
            <label
              htmlFor="order"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Asc/Desc
            </label>
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amount Per Page
            </label>
            <select
              id="sortField"
              name="sortField"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected></option>
              <option value="breed">Breed</option>
              <option value="age">Age</option>
              <option value="zipCodes">Zip Code</option>
            </select>

            <select
              id="order"
              name="order"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected></option>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>

            <select
              id="amount"
              name="amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="30">
                30
              </option>
              <option value="60">60</option>
              <option value="90">90</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center mb-6 mt-6">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <SelectedDogs />
      <div className="results">
        <Results {...requestData} />
      </div>
    </div>
  );
};

export default SearchBar;

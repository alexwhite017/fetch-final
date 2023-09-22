import { useState } from "react";
import { Dog as Dogtype } from "../APIResponseTypes";
import { useSelectedDogsContext } from "../SelectedDogContext";
import fetchMatch from "../fetchFunctions/fetchMatch";

const SelectedDogs = () => {
  const { selectedDogs, update } = useSelectedDogsContext();
  const [match, setMatch] = useState({} as Dogtype);
  const [showModal, setShowModal] = useState(false);

  async function getMatch() {
    const data = await fetchMatch(selectedDogs);
    setMatch(data.match);
  }

  return (
    <div className=" selected-dogs mb-6 text-white bg-neutral-700 p-1.5 w-1/3 h-auto mt-10 mx-auto rounded-lg">
      <h1 className="text-white w-1/4 mx-auto">Selected Dogs</h1>

      <div className="flex justify-center">
        {selectedDogs?.map((dog: Dogtype) => (
          <img
            className="object-center object-cover rounded-full h-10 w-10"
            key={dog.id}
            src={dog.img}
            alt={dog.name}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mb-6 mt-6">
        <button
          onClick={() => {
            getMatch();
            setShowModal(true);
          }}
          className="bg-blue bg-blue-700 hover:bg-blue-800 text-white font-bold rounded py-1 px-4 items-center justify-center m-1"
        >
          Match
        </button>
        <button
          onClick={() => {
            update([]);
          }}
          className="bg-black hover:bg-gray-400 text-white font-bold rounded py-1 px-4 items-center justify-center m-1"
        >
          Clear
        </button>
      </div>

      {showModal ? (
        <div
          id="staticModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold m-auto text-gray-900 dark:text-white">
                  Congratulations! You have a match!
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div
                  className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
                  key={match.id}
                >
                  <div className="flex items-center mb-4"></div>
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-36 w-36"
                      src={match.img}
                      alt={match.name}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">
                      {match.name}
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      {match.breed}
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      {match.age} Year(s) old
                    </p>
                    <p className="text-base text-gray-400 font-normal">
                      Zip Code: {match.zip}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    update([]);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Adopt!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SelectedDogs;

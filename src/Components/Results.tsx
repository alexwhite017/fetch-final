import { useEffect, useState } from "react";
import { Dog as Dogtype } from "../APIResponseTypes";
import fetchDogsId from "../fetchFunctions/fetchDogsId";
import fetchDogs from "../fetchFunctions/fetchDog";
import fetchRequestString from "../fetchFunctions/fetchRequestString";

import Dog from "./Dog";
const Results = (requestData: {
  breeds: string;
  minAge: string;
  maxAge: string;
  location: string;
  sortField: string;
  order: string;
  amount: string;
}) => {
  const [dogs, setDogs] = useState([] as Dogtype[]);
  const [isNextPage, setIsNextPage] = useState("" as string);
  const [isPreviousPage, setIsPreviousPage] = useState("" as string);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs(request: string) {
    const data = await fetchDogsId(request);
    if (data.resultIds.length >= 27) {
      setIsNextPage(data.next);
    } else {
      setIsNextPage("");
    }

    setIsPreviousPage(data.prev);
    const dogs = await fetchDogs(data.resultIds);
    setDogs(dogs);
    setIsLoading(false);
  }
  useEffect(() => {
    getDogs(fetchRequestString(requestData));
  }, [requestData]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="resultsBox w-3/4 rounded-lg mb-4 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogs.map((dog) => (
              <Dog
                key={dog.id}
                id={dog.id}
                name={dog.name}
                breed={dog.breed}
                img={dog.img}
                age={dog.age}
                zip={dog.zip_code}
              />
            ))}
          </div>

          <div className="flex justify-center items-center mt-4">
            {isPreviousPage ? (
              <button
                onClick={() => {
                  getDogs(isPreviousPage);
                }}
                className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l items-center justify-center m-1"
              >
                Prev
              </button>
            ) : (
              <button disabled hidden>
                Previous
              </button>
            )}
            {isNextPage ? (
              <button
                onClick={() => {
                  getDogs(isNextPage);
                }}
                className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r items-center justify-center m-1"
              >
                Next
              </button>
            ) : (
              <button disabled hidden>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Results;

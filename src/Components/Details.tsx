import { useParams } from "react-router-dom";
import fetchDogs from "../fetchFunctions/fetchDog";
import { Dog } from "../APIResponseTypes";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const request = [id] as string[];
  const [dogs, setDogs] = useState([] as Dog[]);
  const [isLoading, setIsLoading] = useState(true);

  if (!id) {
    throw new Error("why did you not give me an id??");
  }

  async function getDogs(request: string[]) {
    const data = await fetchDogs(request);
    setDogs(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getDogs(request);
  }, [request]);

  getDogs(request);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
        key={dogs[0].id}
      >
        <div className="mb-8">
          <img
            className="object-center object-cover rounded-full h-36 w-36"
            src={dogs[0].img}
            alt={dogs[0].name}
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-700 font-bold mb-2">{dogs[0].name}</p>
          <p className="text-base text-gray-400 font-normal">{dogs[0].breed}</p>
          <p className="text-base text-gray-400 font-normal">
            {dogs[0].age} Year(s) old
          </p>
          <p className="text-base text-gray-400 font-normal">
            Zip Code: {dogs[0].zip_code}
          </p>
        </div>
      </div>
    );
  }
};

export default Details;

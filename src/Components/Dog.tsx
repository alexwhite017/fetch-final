import { useEffect, useState } from "react";
import { useSelectedDogsContext } from "../SelectedDogContext";

interface IDog {
  id: string;
  name: string;
  breed: string;
  img: string;
  age: number;
  zip: string;
}

const Dog = (dog: IDog) => {
  const { id, name, breed, img, age, zip } = dog;
  const { selectedDogs, update } = useSelectedDogsContext();
  const [bool, setBool] = useState(false);
  useEffect(() => {
    if (selectedDogs.length === 0) {
      setBool(false);
    }
  }, [selectedDogs]);
  return (
    <div
      className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center"
      key={id}
    >
      <div className="flex items-center mb-4">
        <input
          checked={bool}
          id={id}
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => {
            if (selectedDogs.includes(dog)) {
              update(selectedDogs.filter((item: IDog) => item !== dog));
              setBool(false);
            } else {
              update([...selectedDogs, dog]);
              setBool(true);
            }
          }}
        />
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Add to Match list{" "}
        </label>
      </div>
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={img}
          alt={name}
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
        <p className="text-base text-gray-400 font-normal">{breed}</p>
        <p className="text-base text-gray-400 font-normal">{age} Year(s) old</p>
        <p className="text-base text-gray-400 font-normal">Zip Code: {zip}</p>
      </div>
    </div>
  );
};

export default Dog;

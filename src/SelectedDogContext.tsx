import { createContext, useContext, useState } from "react";
import { Dog } from "./APIResponseTypes";

const SelectedDogsContext = createContext({});

export const DogSelection = ({ children }) => {
  const [selectedDogs, setSelectedDogs] = useState([] as Dog[]);

  return (
    <SelectedDogsContext.Provider
      value={{ selectedDogs, update: setSelectedDogs }}
    >
      {children}
    </SelectedDogsContext.Provider>
  );
};

export const useSelectedDogsContext = () => {
  const { selectedDogs, update } = useContext(SelectedDogsContext);
  return { selectedDogs, update };
};

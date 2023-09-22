import { Dog } from "../APIResponseTypes";

const fetchDogs = async (id: string[]) => {
  const res = await fetch(`https://frontend-take-home-service.fetch.com/dogs`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

  if (!res.ok) {
    throw new Error(`Dogs not found.`);
  }
  const data = (await res.json()) as Dog[];
  return data;
};
export default fetchDogs;

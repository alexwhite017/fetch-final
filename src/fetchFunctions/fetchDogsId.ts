import { DogsApiResponse } from "../APIResponseTypes";

const fetchDogsId = async (request: string) => {
  const res = await fetch(
    `https://frontend-take-home-service.fetch.com${request}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error(`Ids not found.`);
  }
  const data = (await res.json()) as DogsApiResponse;

  return data;
};

export default fetchDogsId;

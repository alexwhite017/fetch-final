import { Match } from "../APIResponseTypes";

const fetchMatch = async (matchArray: string[]) => {
  const res = await fetch(
    `https://frontend-take-home-service.fetch.com/dogs/match`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(matchArray),
    }
  );
  const data = (await res.json()) as Match;
  console.log(data);
  return data;
};

export default fetchMatch;

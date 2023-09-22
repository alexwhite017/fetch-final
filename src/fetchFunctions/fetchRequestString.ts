import sortString from "./fetchSortString";

export default function fetchRequestString(requestData: {
  breeds: string;
  minAge: string;
  maxAge: string;
  location: string;
  sortField: string;
  order: string;
  amount: string;
}) {
  const sort = sortString(
    requestData.sortField,
    requestData.order,
    requestData.amount
  );
  if (
    requestData.breeds === "" &&
    requestData.minAge === "" &&
    requestData.maxAge === "" &&
    requestData.location === ""
  ) {
    return `/dogs/search?${sort}`;
  } else if (requestData.breeds === "" && requestData.location === "") {
    return `/dogs/search?ageMin=${requestData.minAge}&ageMax=${requestData.maxAge}${sort}`;
  } else if (requestData.location === "") {
    return `/dogs/search?breeds=${requestData.breeds}&ageMin=${requestData.minAge}&ageMax=${requestData.maxAge}${sort}`;
  } else {
    return `/dogs/search?breeds=${requestData.breeds}&ageMin=${requestData.minAge}&ageMax=${requestData.maxAge}&zipCodes=${requestData.location}${sort}`;
  }
}

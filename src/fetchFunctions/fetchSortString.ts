export default function sortString(
  sort: string,
  order: string,
  amount: string
) {
  if (sort === "") {
    sort = "breed";
  }
  if (order === "") {
    order = "asc";
  }
  if (amount === "") {
    amount = "30";
  }

  const returnString = `&sort=${sort}:${order}&size=${amount}`;

  return returnString;
}

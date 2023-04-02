import axios from "axios";

export async function getData() {
  const url =
    "https://s3.amazonaws.com/appforest_uf/f1678907491882x777874554533324300/input.txt";
  const response = await axios.get(url);

  return response?.data;
}

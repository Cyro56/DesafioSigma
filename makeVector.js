import { getData } from "./getData.js";

const columnsNumber = 85;
const lineNumber = 65;
let cachedResult = null;

export async function MakeVector() {
  if (cachedResult != null) {
    return cachedResult;
  }
  const initialData = await getData();
  const formatData = initialData.replace(/\s/g, "");

  let field = [];

  for (let i = 0; i < lineNumber; i++) {
    const lineData = formatData
      .replace(/\s/g, "")
      .slice(i * columnsNumber, columnsNumber * (1 + i))
      .split("");

    field.push(lineData);
  }
  cachedResult = field;
  return cachedResult;
}

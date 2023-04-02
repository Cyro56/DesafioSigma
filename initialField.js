import { MakeVector } from "./makeVector.js";
import { UpdateField } from "./updateField.js";

export let cachedResult = null; //exportando os dados para qualquer modulo
export let updateField = false;
export async function initialField(update) {
  if (cachedResult == null || update == "reset") {
    cachedResult = await MakeVector();

    return cachedResult;
  } else if (update === true) {
    updateField = true;
    cachedResult = await UpdateField(cachedResult);

    return cachedResult;
  } else if (updateField) {
    return cachedResult;
  }
}

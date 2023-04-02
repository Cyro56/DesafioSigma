import { AnalyseCell } from "./analyseCell.js";

export async function UpdateField(initialField) {
  let newField = [];

  for (let i = 0; i < 65; i++) {
    let line = [];

    for (let j = 0; j < 85; j++) {
      if (initialField[i][j] != 3 && initialField[i][j] != 4) {
        const analysis = await AnalyseCell(i, j);

        if (analysis) {
          line.push(0);
        } else {
          line.push(1);
        }
      } else {
        line.push(Number(initialField[i][j]));
      }
    }
    newField.push(line);
  }
  return newField;
}

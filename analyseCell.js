import { cachedResult } from "./initialField.js";

export async function AnalyseCell(linePosition, columnPosition) {
  const lineNumber = 64;
  const columnNumber = 84;
  let data = [];
  const field = cachedResult; //usar a variavel global

  const cell = field[linePosition][columnPosition];
  const whiteCell = Boolean(cell == 0);
  const GreenCell = Boolean(cell == 1);
  if (cell == 3) {
    return true;
  } else if (cell == 4) {
    return true;
  }

  for (let i = linePosition - 1; i <= linePosition + 1; i++) {
    for (let j = columnPosition - 1; j <= columnPosition + 1; j++) {
      let validPath = Boolean(
        i >= 0 && i <= lineNumber && j >= 0 && j <= columnNumber
      );
      const validateRedundance = Boolean(
        i != linePosition || j != columnPosition
      );
      if (validateRedundance && validPath) {
        data.push(Number(field[i][j]));
      }
    }
  }

  const greenCellsNumber = data.reduce(
    (count, element) => count + (element === 1 ? 1 : 0),
    0
  ); //contando o  numero de células verdes ao entorno

  if (whiteCell) {
    if (greenCellsNumber > 1 && greenCellsNumber < 5) {
      return false;
    } else {
      return true;
    }
  } else if (GreenCell) {
    if (greenCellsNumber > 3 && greenCellsNumber < 6) {
      return false;
    } else {
      return true;
    }
  }
}

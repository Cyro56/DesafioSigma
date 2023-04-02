import { ChosePath } from "./chosePath.js";
import { initialField } from "./initialField.js";

const initialPosition = [0, 0];
let positionDescription = "";
const efficiencyLimit = 297;
async function initialize() {
  // Inicializa a variável cachedResult
  await initialField(false);

  // Chama a função Process após a inicialização da variável
  await Process();
}

function Descript(lastPosition, nextPosition) {
  let lastLinePosition = lastPosition[0];
  let lastColumnPosition = lastPosition[1];
  let nextLinePosition = nextPosition[0];
  let nextColumnPosition = nextPosition[1];
  console.log(nextPosition);

  if (
    nextLinePosition == lastLinePosition - 1 &&
    nextColumnPosition == lastColumnPosition
  ) {
    positionDescription += "U ";
  } else if (
    nextLinePosition == lastLinePosition + 1 &&
    nextColumnPosition == lastColumnPosition
  ) {
    positionDescription += "D ";
  } else if (
    nextLinePosition == lastLinePosition &&
    nextColumnPosition == lastColumnPosition - 1
  ) {
    positionDescription += "L ";
  } else if (
    nextLinePosition == lastLinePosition &&
    nextColumnPosition == lastColumnPosition + 1
  ) {
    positionDescription += "R ";
  }
}
async function Process() {
  console.time();

  let actualPosition = initialPosition;

  let find = false;

  while (Boolean(!find)) {
    let actualLinePosition = actualPosition[0];
    let actualColumnPosition = actualPosition[1];
    let nextPath = await ChosePath(
      [actualLinePosition, actualColumnPosition],
      true
    );

    if (nextPath.length == 0 || positionDescription.length > efficiencyLimit) {
      //caso fique preso reinicia o jogo

      positionDescription = "";
      actualPosition = initialPosition;
      actualLinePosition = actualPosition[0];
      actualColumnPosition = actualPosition[1];
      nextPath = await ChosePath(
        [actualLinePosition, actualColumnPosition],
        "reset"
      );
    }
    if (actualLinePosition == 64 && actualColumnPosition == 84) {
      //caso encontre pare
      find = true;
      break;
    }

    Descript(actualPosition, nextPath.position);
    actualPosition = nextPath.position;
  }
  console.log(
    "steps description: " + positionDescription,
    "size: " + positionDescription.length
  );
  console.timeEnd();
  return positionDescription;
}

initialize();

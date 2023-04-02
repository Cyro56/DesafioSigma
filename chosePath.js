import { AnalyseCell } from "./analyseCell.js";
import { initialField } from "./initialField.js";
import { ValidPaths } from "./validPaths.js";

let historyData = [];
function EuclideanDistance(linePosition, columnPosition) {
  const distance = Math.sqrt(
    Math.abs(linePosition - 64) ** 2 + Math.abs(columnPosition - 84) ** 2
  );
  return Number(distance.toFixed(2));
}
export async function ChosePath(actualPosition, action) {
  const lineNumber = 64;
  const columnNumber = 84;

  let possiblePaths = await ValidPaths(actualPosition);

  let results = [];
  for (let i = 0; i < possiblePaths.length; i++) {
    let linePosition = possiblePaths[i][0];
    let columnPosition = possiblePaths[i][1];
    let distanceToFinal = EuclideanDistance(linePosition, columnPosition);
    let wheightPosition = Number(
      ((Math.random() * 100) / distanceToFinal).toFixed(3)
    );
    if (linePosition == lineNumber && columnPosition == columnNumber) {
      results.push({
        type: "finally",
        position: [linePosition, columnPosition],
        wheight: 1000,
      });
    } else if (linePosition == 0 && columnPosition == 0) {
      results.push({
        type: "initial",
        position: [linePosition, columnPosition],
        wheight: Number((Math.random() * 25) / distanceToFinal).toFixed(3) - 10,
      });
    } else if (AnalyseCell(linePosition, columnPosition)) {
      const hasInHistoryData = Boolean(
        historyData.find(
          (data) => data.name == `${linePosition}${columnPosition}`
        )
      );

      if (!hasInHistoryData) {
        results.push({
          name: `${linePosition}${columnPosition}`,
          type: "search",
          distanceToTarget: distanceToFinal,
          position: [linePosition, columnPosition],
          wheight: wheightPosition,
        });
      } else if (hasInHistoryData) {
        results.push({
          name: `${linePosition}${columnPosition}`,
          type: "search",
          distanceToTarget: distanceToFinal,
          position: [linePosition, columnPosition],
          wheight: historyData.find(
            (data) => data.name == `${linePosition}${columnPosition}`
          ).wheight,
        });
      }
    }
  }
  let choose = results.sort((a, b) => b.wheight - a.wheight)[0];
  const hasChooseInHistoryData = Boolean(
    historyData.find(
      (data) => data.name == `${choose.position[0]}${choose.position[1]}`
    )
  );
  if (!hasChooseInHistoryData) {
    historyData.push({
      name: `${choose.name}`,
      distanceToTarget: choose.distanceToTarget,
      position: choose.position,
      wheight: choose.wheight,
    });
  } else if (hasChooseInHistoryData) {
    historyData.find((data) => data.name == `${choose.name}`).wheight -= 0.01;
  }
  await initialField(action); //atualizando os dados para o próximo passo

  return choose;
}

export async function ValidPaths(actualPosition) {
  let line = actualPosition[0];
  let column = actualPosition[1];
  const columnNumber = 84;
  const lineNumber = 64;
  let results = [];
  if (line - 1 >= 0) {
    results.push([line - 1, column]);
  }
  for (let j = column - 1; j <= column + 1; j += 2) {
    if (j >= 0 && j <= columnNumber) {
      results.push([line, j]);
    }
  }
  if (line + 1 <= lineNumber) {
    results.push([line + 1, column]);
  }
  return results;
}

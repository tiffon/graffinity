export class cmCellVisitor {
  apply(cell) {
    let color = "red";
    if (cell.isHeaderCell || !cell.isDataCell) {
      return;
    }

    console.log(cell.data);
    let values = cell.data.modelRow.getValuesAsList([cell.data.colNodeIndexes])[0];
    console.log(cell.getGroup());
    console.log(values);

    if (cell.isMajorCell) {
      if (cell.isInMajorRow) {
        color = "red";
      } else {
        color = "red";
      }
    } else { // !majorCell
      if (cell.isInMajorRow) {
        color = "red";
      } else {
        color = "black";
      }
    }

    cell.getGroup().append("circle")
      .attr("cx", 5)
      .attr("cy", 5)
      .attr("r", 5)
      .attr("fill", "none")
      .style("stroke", color)
      .style("stroke-width", 2);
  }
}

/* global d3
 */
import {MatrixRow} from "./matrixRow"

export class ControlRow extends MatrixRow {

  constructor(svg, rowIndex, colNodeIndexes, colWidth, rowHeight) {
    super(svg, rowIndex, colNodeIndexes.length, colWidth, rowHeight);

    this.unrollControls = [];
    this.rollupControls = [];


    for (var i = 0; i < colNodeIndexes.length; ++i) {
      var group = this.getMajorCol(i);
      this.unrollControls[i] = group.append("g");

      var self = this;
      this.unrollControls[i].append("text")
        .text("+")
        .style("text-anchor", "start")
        .style("dominant-baseline", "hanging");

      this.unrollControls[i].append("rect")
        .attr("width", colWidth)
        .attr("height", rowHeight)
        .style("fill", "transparent")
        .on("click", function () {
          self.onUnrollColClicked(d3.select(this.parentNode.parentNode));
        });

      this.rollupControls[i] = group.append("g")
        .style("display", "none");

      this.rollupControls[i]
        .append("text")
        .text("-")
        .style("text-anchor", "start")
        .style("dominant-baseline", "hanging");

      this.rollupControls[i].append("rect")
        .attr("width", colWidth)
        .attr("height", rowHeight)
        .style("fill", "transparent")
        .on("click", function () {
          self.onRollupColClicked(d3.select(this.parentNode.parentNode));
        });
    }

    this.colNodeIndexes = colNodeIndexes;
  }

  onUnrollColClicked(majorCol) {
    var colIndex = this.getMajorColIndex(majorCol);
    this.unrollControls[colIndex].style("display", "none");
    this.rollupControls[colIndex].style("display", "block");
    this.colClickedCallback(colIndex, true);
  }

  onRollupColClicked(majorCol) {
    var colIndex = this.getMajorColIndex(majorCol);
    this.unrollControls[colIndex].style("display", "block");
    this.rollupControls[colIndex].style("display", "none");
    this.colClickedCallback(colIndex, false);
  }

  setColClickCallback(callback) {
    this.colClickedCallback = callback;
  }
}

export class cmWrapperBase {

  constructor(element, $log, scope, mainController) {
    this.$log = $log;
    this.$scope = scope;
    this.element = element;
    this.mainController = mainController;
    this.matrices = [];

    this.$scope.$on("changeMatrixHeight", this.updateElementPositions.bind(this));
  }

  setUseAnimation(useAnimation) {
    for (let i = 0; i < this.matrices.length; ++i) {
      this.matrices[i].setUseAnimation(useAnimation);
    }
  }

  setSortOrders(rowPerm, colPerm) {
    for (let i = 0; i < this.matrices.length; ++i) {
      this.matrices[i].setSortOrders(rowPerm, colPerm);
    }
  }

  setModel(model) {
    for (let i = 0; i < this.matrices.length; ++i) {
      this.matrices[i].setModel(model);
      this.matrices[i].setPosition(1, 1);
    }

    this.updateElementPositions();
  }

  setWidth(width) {
    this.updateElementPositions(null, width)
  }

}


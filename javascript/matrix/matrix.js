class Matrix {
  constructor(string) {
    this.string = string;
    this.rows = this.parseRows();
    this.columns = this.parseColumns();
  }

  parseRows() {}

  parseColumns() {}
}

module.exports = Matrix;

class Triangle {
  constructor(numRows) {
    this.numRows = numRows;
    this.rows = [[1]];
    this.lastRow = [1];

    this.setRows();
  }

  setRows() {
    while (this.numRows > this.rows.length) {
      let newRow = this.lastRow.map((num, idx) => {
        let previousValue = this.lastRow[idx - 1] || 0;
        let nextValue = this.lastRow[idx] || 0;
        return previousValue + nextValue;
      });

      newRow.push(1);
      this.rows.push(newRow);
      this.lastRow = this.rows[this.rows.length - 1];
    }
  }
}

module.exports = Triangle;

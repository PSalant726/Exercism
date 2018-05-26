class Matrix {
  constructor(string) {
    this.string = string;
    this.rows = this.parseRows();
    this.columns = this.parseColumns();
  }

  parseRows() {
    return this.string.split("\n").map(row => {
      return row.split(" ").map(number => {
        return parseInt(number, 10);
      });
    });
  }

  parseColumns() {
    const longestRowLength = this.getLongestRowLength();
    const columns = [];

    for (let i = 0; i < longestRowLength; i++) {
      this.rows.forEach(row => {
        if (columns[i]) {
          columns[i].push(row[i]);

        } else {
          columns[i] = [row[i]] || [null];
        }
      });
    }

    return columns;
  }

  getLongestRowLength() {
    let length = 0;

    this.rows.forEach(row => {
      if (row.length > length) { length = row.length; }
    });

    return length;
  }
}

module.exports = Matrix;

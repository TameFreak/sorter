class Sorter {
  constructor() {
    this.mas = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.mas.push(element);
  }

  at(index) {
    return this.mas[index];
  }

  get length() {
    return this.mas.length;
  }

  toArray() {
    return this.mas;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);

    for (let i = 0; i < indices.length - 1; i++){
      for (let j = 0; j < indices.length - 1; j++){

        if (this.comparator(this.mas[indices[j]], this.mas[indices[j + 1]]) > 0){
          let elem = this.mas[indices[j]];
          this.mas[indices[j]] = this.mas[indices[j + 1]];
          this.mas[indices[j + 1]] = elem;
        }
    
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
export class MyArray {

  private collection: (string | number)[] = [];

  public add(value?: any): void {
    if (!value
      || value === undefined
      || value === null
      || (typeof value !== 'string' && typeof value !== 'number')
    ) {
      throw new Error('Your value must be string or number');
    }

    if (this.collection.length) {
      const valueType = typeof this.collection[0];
      if (typeof value !== valueType) {
        throw new Error(`Your value must be ${valueType}`);
      } else {
        this.collection.push(value);
      }
    } else {
      this.collection.push(value);
    }
  }

  public remove(value: string | number): void {
    this.collection = this.collection.filter((item) => {
      return item !== value;
    });
  }

  public getvalues(): (string | number)[] {
    return this.collection;
  }

}

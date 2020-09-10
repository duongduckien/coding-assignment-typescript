// Response
import { CustomResponse } from './custom-response';

export class MyArray {

  private collection: (string | number)[] = [];

  constructor() {}

  public add(value: string | number): CustomResponse<MyArray> {
    if (!value) {
      return CustomResponse.error<MyArray>('Missing the argument');
    }

    if (this.collection.length) {
      const valueType = typeof this.collection[0];
      if (typeof value !== valueType) {
        return CustomResponse.error<MyArray>(`Your argument must be ${valueType}`);
      }
    }

    this.collection.push(value);

    return CustomResponse.success<MyArray>(new MyArray());
  }

  public remove(value: string | number): CustomResponse<MyArray> {
    if (!value) {
      return CustomResponse.error<MyArray>('Missing the argument');
    }

    if (this.collection.length === 0 || this.collection.indexOf(value) === -1) {
      return CustomResponse.error<MyArray>('Can not remove data');
    }

    this.collection = this.collection.filter((item) => {
      return item !== value;
    });

    return CustomResponse.success<MyArray>(new MyArray());
  }

  public getvalues(): CustomResponse<MyArray> {
    if (!this.collection) {
      return CustomResponse.error<MyArray>('Can not get data');
    }
    return CustomResponse.success<any>(this.collection);
  }

}

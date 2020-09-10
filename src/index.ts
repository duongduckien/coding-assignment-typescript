// Utils
import { MyArray } from './utils/my-array';
import { MyArrow } from './utils/my-arrow';
import { Cached } from './utils/cached';

// Response
import { CustomResponse } from './utils/custom-response';

class App {

  public static bootstrap(): App {
    return new App();
  }

  constructor() {
    this.execute();
  }

  private execute() {
    this.executeStringArray();
    this.executeNumberArray();
    this.executeBooleanArray();
    this.executeMixedArray();
    this.executeArrowFunc();
    this.executeCaching();
  }

  private executeStringArray() {
    try {
      const myArray = new MyArray();

      const add1: CustomResponse<MyArray> = myArray.add('aaa');
      if (!add1.response.status) {
        this.showLogs('String array', 'error', add1.response.error);
      }

      const add2: CustomResponse<MyArray> = myArray.add('bbb');
      if (!add2.response.status) {
        this.showLogs('String array', 'error', add2.response.error);
      }

      const add3: CustomResponse<MyArray> = myArray.add('ccc');
      if (!add3.response.status) {
        this.showLogs('String array', 'error', add3.response.error);
      }

      const remove1: CustomResponse<MyArray> = myArray.remove('bbb');
      if (!remove1.response.status) {
        this.showLogs('String array', 'error', remove1.response.error);
      }

      const res: CustomResponse<MyArray> = myArray.getvalues();
      if (!res.response.status) {
        this.showLogs('String array', 'error', res.response.error);
      } else {
        this.showLogs('String array', 'result', res.getValue());
      }
    } catch (e) {
      console.log(e);
    }
  }

  private executeNumberArray() {
    try {
      const myArray = new MyArray();

      const add1: CustomResponse<MyArray> = myArray.add(1);
      if (!add1.response.status) {
        this.showLogs('Number array', 'error', add1.response.error);
      }

      const add2: CustomResponse<MyArray> = myArray.add(2);
      if (!add2.response.status) {
        this.showLogs('Number array', 'error', add2.response.error);
      }

      const add3: CustomResponse<MyArray> = myArray.add(3);
      if (!add3.response.status) {
        this.showLogs('Number array', 'error', add3.response.error);
      }

      const remove1: CustomResponse<MyArray> = myArray.remove(2);
      if (!remove1.response.status) {
        this.showLogs('Number array', 'error', remove1.response.error);
      }

      const res: CustomResponse<MyArray> = myArray.getvalues();
      if (!res.response.status) {
        this.showLogs('Number array', 'error', res.response.error);
      } else {
        this.showLogs('Number array', 'result', res.getValue());
      }
    } catch (e) {
      console.log(e);
    }
  }

  private executeBooleanArray() {
    try {
      const myArray = new MyArray();
      // myArray.add(true);
      // myArray.add(false);
    } catch (e) {
      console.log(e);
    }
  }

  private executeMixedArray() {
    try {
      const myArray = new MyArray();

      const add1: CustomResponse<MyArray> = myArray.add(1);
      if (!add1.response.status) {
        this.showLogs('Mixed array', 'error', add1.response.error);
      }

      const add2: CustomResponse<MyArray> = myArray.add('bbb');
      if (!add2.response.status) {
        this.showLogs('Mixed array', 'error', add2.response.error);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private executeArrowFunc() {
    try {

      this.showLogs(
        'The default values are returned when args not given',
        'result',
        MyArrow.myFunc({ firstParam: 'defaultFirst', secondParam: 'defaultSecond' }),
      );

      this.showLogs(
        'The given values are returned when args given',
        'result',
        MyArrow.myFunc({ firstParam: 'first', secondParam: 'second' }),
      );

      this.showLogs(
        'The values are returned when one arg given',
        'result',
        MyArrow.myFunc({ firstParam: 'first' }),
      );

      this.showLogs(
        'The values are returned when one arg given',
        'result',
        MyArrow.myFunc({ secondParam: 'second' }),
      );

    } catch (e) {
      console.log(e);
    }
  }

  private executeCaching() {
    try {
      const hundredTimes = Cached.memoize(this.hundredTimes);
      console.log(hundredTimes(1));
      console.log(hundredTimes(1));
      console.log(hundredTimes(2));
      console.log(hundredTimes(2));
      console.log(hundredTimes(1));
    } catch (e) {
      console.log(e);
    }
  }

  private hundredTimes(arg: number): number {
    return arg * 100;
  }

  private showLogs(title: string, type: string, value: any) {
    console.log(`********** ${type.toUpperCase()} - ${title.toUpperCase()} **********`);
    console.log(value);
  }

}

App.bootstrap();
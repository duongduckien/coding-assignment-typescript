// Utils
import { MyArray } from './utils/my-array';
import { MyArrow } from './utils/my-arrow';
import { Cached } from './utils/cached';

// Errors
import { CustomError } from './utils/custom-error';

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
      myArray.add('aaa');
      myArray.add('bbb');
      myArray.add('ccc');
      myArray.remove('bbb');
      this.showLogs('String array', 'result', myArray.getvalues());
    } catch (e) {
      if (e instanceof CustomError) {
        this.showLogs('String array', 'error', e.message);
      } else {
        console.log(e);
      }
    }
  }

  private executeNumberArray() {
    try {
      const myArray = new MyArray();
      myArray.add(1);
      myArray.add(2);
      myArray.add(3);
      myArray.remove(2);
      this.showLogs('Number array', 'result', myArray.getvalues());
    } catch (e) {
      if (e.message) {
        this.showLogs('Number array', 'error', e.message);
      } else {
        console.log(e.message);
      }
    }
  }

  private executeBooleanArray() {
    try {
      const myArray = new MyArray();
      myArray.add(true);
      myArray.add(false);
    } catch (e) {
      if (e instanceof CustomError) {
        this.showLogs('Boolean array', 'error', e.message);
      } else {
        console.log(e);
      }
    }
  }

  private executeMixedArray() {
    try {
      const myArray = new MyArray();
      myArray.add(1);
      myArray.add('bbb');
    } catch (e) {
      if (e.message) {
        this.showLogs('Mixed array', 'error', e.message);
      } else {
        console.log(e.message);
      }
    }
  }

  private executeArrowFunc() {
    try {

      this.showLogs(
        'The default values are returned when args not given',
        'result',
        MyArrow.myFunc({ firstParam: 'defaultFirst', secondParam: 'defaultSecond' })
      );

      this.showLogs(
        'The given values are returned when args given',
        'result',
        MyArrow.myFunc({ firstParam: 'first', secondParam: 'second' })
      );

      this.showLogs(
        'The values are returned when one arg given',
        'result',
        MyArrow.myFunc({ firstParam: 'first' })
      );

      this.showLogs(
        'The values are returned when one arg given',
        'result',
        MyArrow.myFunc({ secondParam: 'second' })
      );

    } catch (e) {
      if (e.message) {
        this.showLogs('Arrow function', 'error', e.message);
      } else {
        console.log(e.message);
      }
    }
  }

  private executeCaching() {
    const hundredTimes = Cached.memoize(this.hundredTimes);
    console.log(hundredTimes(1));
    console.log(hundredTimes(1));
    console.log(hundredTimes(2));
    console.log(hundredTimes(2));
    console.log(hundredTimes(1));
  }

  private hundredTimes(arg: number): number {
    if (!arg) {
      throw new Error('You did not pass any argument');
    }
    return arg * 100;
  }

  private showLogs(title: string, type: string, value: any) {
    console.log(`********** ${type.toUpperCase()} - ${title.toUpperCase()} **********`);
    console.log(value);
  }

}

App.bootstrap();
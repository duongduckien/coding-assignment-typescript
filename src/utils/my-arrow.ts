// Interfaces
import { IArrowResult } from '../interfaces/arrow.interface';

export class MyArrow {

  static myFunc(params: IArrowResult): IArrowResult {
    const defaultVal: IArrowResult = {
      firstParam: 'defaultFirst',
      secondParam: 'defaultSecond',
    };

    if (!params) {
      return defaultVal;
    }

    return {
      ...defaultVal,
      ...params,
    };
  }

}
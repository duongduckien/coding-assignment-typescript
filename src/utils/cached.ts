export class Cached {

  static memoize(func: any): any {
    const cache = {};
    return (...args) => {
      const n = args[0];
      if (n in cache) {
        console.log('Cached');
        return cache[n];
      }

      console.log('Calculating');
      const result = func(n);
      cache[n] = result;
      return result;
    };
  }

}
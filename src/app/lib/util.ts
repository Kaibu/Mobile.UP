import { HttpParameterCodec } from '@angular/common/http';
import { routes } from '../app-routing.module';
import {IModule} from './interfaces';

/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * see https://github.com/angular/angular/issues/11058
 */
export class WebHttpUrlEncodingCodec implements HttpParameterCodec {
  encodeKey(k: string): string { return encodeURIComponent(k); }
  encodeValue(v: string): string { return encodeURIComponent(v); }
  decodeKey(k: string): string { return decodeURIComponent(k); }
  decodeValue(v: string) { return decodeURIComponent(v); }
}

export module utils {


  /**
   * @name isInArray
   * @description checks if value is in array
   * @param {Array} array
   * @param {any} value
   * @returns {boolean} whether value in array
   */
  export function isInArray(array, value): boolean {
    let found = false;
    for (let i = 0; i < array.length; i++) {
      if (JSON.stringify(array[i]) === JSON.stringify(value)) {
        found = true;
      }
    }
    return found;
  }

  export function convertToArray(toConvert) { // convert everything to an array so you can handle it universally
    if (Array.isArray(toConvert)) {
      return toConvert;
    } else {
      const tmp = [];
      if (toConvert) {
        tmp.push(toConvert);
      }
      return tmp;
    }
  }

  /**
   * @name contains
   * @description checks, whether y is a substring of x
   * @param {string} x - String that does or does not contain string y
   * @param {string} y - String that is or is not contained in string y
   * @returns {Boolean} - Whether string x contains string y
   */
  export function contains(x: string, y: string): boolean {
    return x.toLowerCase().includes(y.toLowerCase());
  }

  /**
   * tests whether obj is an empty object
   * from here https://stackoverflow.com/a/32108184/6800122
   * @param obj
   */
  export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
}

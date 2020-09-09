export interface IResponse {
  status: boolean;
  error?: string;
}

export class CustomResponse<T> {

  public response: IResponse;

  private value: T;

  constructor(response: IResponse, value?: T) {
    if (!response.status && (!response.error || (response.error && response.error.trim() === ''))) {
      throw new Error('CustomResponse: Missing the error');
    }
    this.response = response;
    this.value = value;
    Object.freeze(this);
  }

  public static success<U>(value?: U): CustomResponse<U> {
    const response: IResponse = {
      status: true,
    };
    return new CustomResponse<U>(response, value);
  }

  public static error<U>(error: string): CustomResponse<U> {
    const response: IResponse = {
      error,
      status: false,
    };
    return new CustomResponse<U>(response);
  }

  public getValue(): T {
    if (!this.response.status) {
      throw new Error('Can not get the value');
    }
    return this.value;
  }

}
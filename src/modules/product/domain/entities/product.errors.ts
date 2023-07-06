export namespace ProductNameErrors {
  export class NullOrUndefinedValidationError extends Error {
    public _tag: 'ProductNameNullOrUndefinedValidationError';
    private constructor() {
      super(`The product name fails to meet be defined`);
      this._tag = 'ProductNameNullOrUndefinedValidationError';
    }
    public static of(): NullOrUndefinedValidationError {
      return new NullOrUndefinedValidationError();
    }
  }
  export class MinLengthValidationError extends Error {
    public _tag: 'ProductNameMinLengthValidationError';
    public minLength: number;
    private constructor(name: string, minLength: number) {
      super(
        `The product ${name} fails to meet min length requirement: ${minLength}`
      );
      this._tag = 'ProductNameMinLengthValidationError';
      this.minLength = minLength;
    }
    public static of(
      name: string,
      minLength: number
    ): MinLengthValidationError {
      return new MinLengthValidationError(name, minLength);
    }
  }

  export class MaxLengthValidationError extends Error {
    public _tag: 'ProductNameMaxLengthValidationError';
    public maxLength: number;
    private constructor(name: string, maxLength: number) {
      super(
        `The product ${name} fails to meet min length requirement: ${maxLength}`
      );
      this._tag = 'ProductNameMaxLengthValidationError';
      this.maxLength = maxLength;
    }
    public static of(
      name: string,
      maxLength: number
    ): MaxLengthValidationError {
      return new MaxLengthValidationError(name, maxLength);
    }
  }
}

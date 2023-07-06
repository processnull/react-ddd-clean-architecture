import { Either, left, right } from './either';

export type GuardResponse = string;

export interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export type GuardArgumentCollection = IGuardArgument[];

export class Guard {
  public static againstNullOrUndefined(
    argument: any,
    argumentName: string
  ): Either<Error, boolean> {
    if (argument === null || argument === undefined) {
      return left(new Error(`${argumentName} is null or undefined`));
    } else {
      return right(true);
    }
  }

  public static greaterThan(
    minValue: number,
    actualValue: number,
    argumentName: string
  ): Either<Error, boolean> {
    return actualValue > minValue
      ? right(true)
      : left(
          new Error(
            `The ${argumentName} number given {${actualValue}} is not greater than {${minValue}}`
          )
        );
  }

  public static againstAtLeast(
    numChars: number,
    text: string,
    argumentName: string
  ): Either<Error, boolean> {
    return text.length >= numChars
      ? right(true)
      : left(
          new Error(
            `The ${argumentName} text is not at least ${numChars} chars.`
          )
        );
  }

  public static againstAtMost(
    numChars: number,
    text: string,
    argumentName: string
  ): Either<Error, boolean> {
    return text.length <= numChars
      ? right(true)
      : left(
          new Error(
            `The ${argumentName} text is greater than ${numChars} chars.`
          )
        );
  }

  public static isOneOf(
    value: any,
    validValues: any[],
    argumentName: string
  ): Either<Error, boolean> {
    let isValid = false;
    for (let validValue of validValues) {
      if (value === validValue) {
        isValid = true;
      }
    }

    if (isValid) {
      return right(true);
    } else {
      return left(
        new Error(
          `${argumentName} isn't oneOf the correct types in ${JSON.stringify(
            validValues
          )}. Got "${value}".`
        )
      );
    }
  }
}

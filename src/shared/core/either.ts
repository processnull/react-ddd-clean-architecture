export type Either<L, R> = Left<L> | Right<R>;

class Left<L> {
  readonly error: L;

  constructor(error: L) {
    this.error = error;
  }

  isLeft(): this is Left<L> {
    return true;
  }

  isRight(): this is Right<never> {
    return false;
  }
}

class Right<R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isLeft(): this is Left<never> {
    return false;
  }

  isRight(): this is Right<R> {
    return true;
  }
}

export const left = <L, R>(error: L): Either<L, R> => {
  return new Left(error);
};

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value);
};

export const sequence = <L, R>(eithers: Either<L, R>[]): Either<L, R[]> => {
  const rightValues: R[] = [];
  for (const either of eithers) {
    if (either.isLeft()) {
      return left(either.error);
    } else {
      rightValues.push(either.value);
    }
  }
  return right(rightValues);
};

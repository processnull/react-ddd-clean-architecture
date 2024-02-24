import { Either, left, right } from '../../../../shared/core/either';
import { Guard } from '../../../../shared/core/guard';
import { ValueObject } from '../../../../shared/domain/value-object';
import { ProductNameErrors } from './product.errors';

export interface ProductNameProps {
  name: string;
}

export class ProductName extends ValueObject<ProductNameProps> {
  public static maxLength: number = 15;
  public static minLength: number = 2;

  get value(): string {
    return this.props.name;
  }

  private constructor(props: ProductNameProps) {
    super(props);
  }

  public static create(props: ProductNameProps): Either<Error, ProductName> {
    const usernameOrError = Guard.againstNullOrUndefined(
      props.name,
      'ProductName'
    );
    if (usernameOrError.isLeft()) {
      return left(usernameOrError.error);
      // return left(ProductNameErrors.NullOrUndefinedValidationError.of());
    }

    const minLengthOrError = Guard.againstAtLeast(
      this.minLength,
      props.name,
      'ProductName'
    );
    if (minLengthOrError.isLeft()) {
      return left(minLengthOrError.error);
      // return left(
      //   ProductNameErrors.MaxLengthValidationError.of(
      //     props.name,
      //     this.minLength
      //   )
      // );
    }

    const maxLengthOrError = Guard.againstAtMost(
      this.maxLength,
      props.name,
      'ProductName'
    );
    if (maxLengthOrError.isLeft()) {
      return left(maxLengthOrError.error);
      // return left(
      //   ProductNameErrors.MinLengthValidationError.of(
      //     props.name,
      //     this.maxLength
      //   )
      // );
    }

    return right(new ProductName(props));
  }
}

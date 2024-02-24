import { Either, left, right } from '../../../../shared/core/either';
import { Guard } from '../../../../shared/core/guard';
import { ValueObject } from '../../../../shared/domain/value-object';
// import { ProductPriceErrors } from './product.errors';

type Currency = 'COP' | 'USD';

export type Price = {
  currency: Currency;
  value: number;
};

export interface ProductPriceProps {
  price: Price;
}

export class ProductPrice extends ValueObject<ProductPriceProps> {
  public static minValue: number = 1;
  public static currencies: Currency[] = ['COP', 'USD'];

  get value(): Price {
    return this.props.price;
  }

  private constructor(props: ProductPriceProps) {
    super(props);
  }

  public static create(props: ProductPriceProps): Either<Error, ProductPrice> {
    const usernameOrError = Guard.againstNullOrUndefined(
      props.price,
      'PriceValue'
    );
    if (usernameOrError.isLeft()) {
      return left(usernameOrError.error);
      // return left(ProductPriceErrors.NullOrUndefinedValidationError.of());
    }

    const greaterThanOrError = Guard.greaterThan(
      this.minValue,
      props.price.value,
      'PriceValue'
    );
    if (greaterThanOrError.isLeft()) {
      return left(greaterThanOrError.error);
    }

    const oneOfOrError = Guard.isOneOf(
      props.price.currency,
      this.currencies,
      'PriceCurrency'
    );
    if (oneOfOrError.isLeft()) {
      return left(oneOfOrError.error);
    }

    return right(new ProductPrice(props));
  }
}

import { Either, left, right, sequence } from '../../../../shared/core/either';
import { AggregateRoot } from '../../../../shared/domain/agreggate-root';
import { UniqueEntityID } from '../../../../shared/domain/unique-entity-id';
import { ProductName, ProductNameProps } from './name.valueobject';
import { ProductPrice, Price, ProductPriceProps } from './price.valueobject';
import { ProductId } from './product-Id.entity';
import { IProduct } from './product.entity';

export type ProductProps = ProductNameProps & ProductPriceProps;

export class Product extends AggregateRoot<ProductProps> {
  get productId() {
    const productIdOrError = ProductId.create();
    if (productIdOrError.isRight()) {
      return productIdOrError.value.id.toString();
    }
  }

  get name(): string {
    return this.props.name;
  }

  get price(): Price {
    return this.props.price;
  }

  private constructor(props: ProductProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: ProductProps,
    id?: UniqueEntityID
  ): Either<Error, Product> {
    const nameOrError = ProductName.create(props);
    const priceOrError = ProductPrice.create(props);

    const dtoOrError = sequence<Error, string | Price>([
      nameOrError,
      priceOrError,
    ]);

    if (dtoOrError.isLeft()) {
      return left(dtoOrError.error);
    }

    const product = new Product(
      {
        ...props,
      },
      id
    );

    return right(product);
  }
}

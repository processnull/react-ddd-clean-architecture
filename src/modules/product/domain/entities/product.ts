import { Either, left, right, sequence } from '../../../../shared/core/either';
import { AggregateRoot } from '../../../../shared/domain/agreggate-root';
import { UniqueEntityID } from '../../../../shared/domain/unique-entity-id';
import { ProductName, ProductNameProps } from './name.valueobject';
import { ProductPrice, Price, ProductPriceProps } from './price.valueobject';
import { ProductId } from './product-Id.entity';
import { IProduct } from './product.entity';

export type ProductProps = {
  name:ProductName,
  price: ProductPrice
}

export class Product extends AggregateRoot<ProductProps> {
  get productId() {
    const productIdOrError = ProductId.create();
    if (productIdOrError.isRight()) {
      return productIdOrError.value.id.toString();
    }
  }

  get name(): string {
    return this.name;
  }

  get price(): Price {
    return this.price;
  }

  private constructor(props: ProductProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: ProductProps,
    id?: UniqueEntityID
  ): Either<Error[], Product> {
    const nameOrError = ProductName.create({ name: props.name.value });
    const priceOrError = ProductPrice.create({ price: props.price.value });

    const dtoOrError = sequence<Error, ProductName | ProductPrice>([
      nameOrError,
      priceOrError,
    ]);

    if (dtoOrError.isLeft()) {
      return left(dtoOrError.error);
    }
    console.log(dtoOrError.value)
    console.log(Object.assign({}, ...dtoOrError.value.map(prop => prop.props)) )
    console.log( Object.fromEntries(dtoOrError.value.map(prop => prop.props).flatMap(Object.entries)))
    const product = new Product(
      {
        // ...dtoOrError.value.reduce((prev, curr) => {
        //   return { ...prev.value, ...curr.props }
        // }, {}),
        ...props,
      },
      id
    );

    return right(product);
  }
}

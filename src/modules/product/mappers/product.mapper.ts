import { Either } from "../../../shared/core/either";
import { Mapper } from "../../../shared/core/mapper";
import { Product, ProductProps } from "../domain/entities/product";

export class PostMap implements Mapper<Product> {

    public static toDomain(productProps: ProductProps): Either<Error[], Product> {
        return Product.create(productProps);
    }

    public static toPersistence(product: Product): any {
        return {
            id: product.id,
            name: product.name,
            price: product.price
        }
    }
}
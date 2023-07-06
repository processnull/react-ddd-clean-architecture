import { right } from '../../../../shared/core/either';
import { Entity } from '../../../../shared/domain/entity';
import { UniqueEntityID } from '../../../../shared/domain/unique-entity-id';

export class ProductId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id;
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  public static create(id?: UniqueEntityID) {
    return right(new ProductId(id));
  }
}

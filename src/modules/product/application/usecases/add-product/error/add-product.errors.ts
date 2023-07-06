
export namespace AddProductErrors {
  export class ProductAlreadyExistsError extends Error {
    constructor(name: string) {
      super(`The product ${name} already exists`);
    }
  }
}

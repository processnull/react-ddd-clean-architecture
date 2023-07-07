import { IProduct } from "../../domain/entities/product.entity";

interface IProductList {
  products: IProduct[];
}
const initialState: IProductList = {
  products: [],
};

export const productReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        // products: [...state.products, action.payload],
        products: action.payload,
      };
    default:
      return state;
  }
};

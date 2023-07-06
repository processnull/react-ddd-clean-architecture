import { ResponseDTO } from './response.dto';

export interface Viewmodel<IViewModel> extends ResponseDTO {
  data: IViewModel;
}
